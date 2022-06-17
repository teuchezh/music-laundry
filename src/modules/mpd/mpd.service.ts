import { Injectable } from '@nestjs/common';
import api, { MPDApi } from 'mpd-api';
import config from 'src/config/config';

@Injectable()
export class MpdService {
  async stats() {
    const config = {
      host: 'localhost',
      port: 6600,
    };
    const client = await api.connect(config);

    return client.api.status.get();
  }

  async play() {
    const config = {
      host: 'localhost',
      port: 6600,
    };

    const client: MPDApi.ClientAPI = await api.connect(config);

    const files = client.api.db.listfiles();

    return client.api.playback.play('0');
  }
}
