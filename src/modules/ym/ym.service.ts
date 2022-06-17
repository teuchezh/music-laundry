import { Injectable } from '@nestjs/common';
import { WrappedYMApi, YMApi } from 'ym-api';

@Injectable()
export class YmService {
  public async init() {
    const api = new YMApi();
    const wApi = new WrappedYMApi();
    await api.init({
      username: '',
      password: '',
    });
    const search = await api.searchTracks('Eminem - without me');
    return search.tracks.results;
    // console.log(await api.getTrack(search.tracks.results[0].id));

    // console.log(await wApi.getMp3DownloadUrl(search.tracks.results[0].id));
  }
}
