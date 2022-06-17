import { Injectable } from '@nestjs/common';
import { MpdService } from './modules/mpd/mpd.service';
import { YmService } from './modules/ym/ym.service';

@Injectable()
export class AppService {
  constructor(
    private readonly mpdService: MpdService,
    private readonly ymService: YmService,
  ) {}
  getHello(): any {
    // return this.mpdService.connection();
    return this.ymService.init();
  }
}
