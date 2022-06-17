import { Controller, Get, Post } from '@nestjs/common';
import { MpdService } from './mpd.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('mpd')
@Controller('mpd')
export class MpdController {
  constructor(private mpdService: MpdService) {}

  @ApiOperation({ operationId: 'stats', summary: 'Get MPD stats' })
  @Get()
  async stats() {
    return this.mpdService.stats();
  }

  @ApiOperation({ operationId: 'play', summary: 'Play MPD' })
  @Post('play')
  async play() {
    return this.mpdService.play();
  }
}
