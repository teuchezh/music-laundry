import { Controller, Post } from '@nestjs/common';
import { YmService } from './ym.service';

@Controller('ym')
export class YmController {
  constructor(private ymService: YmService) {}
  @Post()
  async find(): Promise<any> {
    return this.ymService.init();
  }
}
