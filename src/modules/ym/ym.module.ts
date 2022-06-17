import { Module } from '@nestjs/common';
import { YmService } from './ym.service';
import { YmController } from './ym.controller';

@Module({
  imports: [YmModule],
  providers: [YmService],
  exports: [YmService],
  controllers: [YmController],
})
export class YmModule {}
