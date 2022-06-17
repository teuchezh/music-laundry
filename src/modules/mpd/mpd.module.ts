import { Module } from '@nestjs/common';
import { MpdService } from './mpd.service';
import { MpdController } from './mpd.controller';

@Module({
  providers: [MpdService],
  exports: [MpdService],
  controllers: [MpdController],
})
export class MpdModule {}
