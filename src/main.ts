import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from './config/config';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { name, version, description } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get(ConfigService).get<ConfigType['app']>('app');

  if (appConfig.enableSwagger) {
    const swaggerDocBuilder = new DocumentBuilder()
      .setTitle(name)
      .setDescription(description)
      .setVersion(version)
      .build();

    const document = SwaggerModule.createDocument(app, swaggerDocBuilder);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(appConfig.port);
}
bootstrap();
