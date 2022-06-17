import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { MpdController } from './modules/mpd/mpd.controller';
import { MpdModule } from './modules/mpd/mpd.module';
import { YmController } from './modules/ym/ym.controller';
import { YmModule } from './modules/ym/ym.module';
import { YmService } from './modules/ym/ym.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MpdModule,
    YmModule,
  ],
  controllers: [AppController, YmController, MpdController],
  providers: [AppService, YmService],
})
export class AppModule {}
