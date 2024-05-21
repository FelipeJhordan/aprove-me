import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { BASE_PATH } from './common/constants/paths';
import { GeneralErrorFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Main');

  app.useGlobalFilters(new GeneralErrorFilter(logger));

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new TransformInterceptor());

  app.setGlobalPrefix(BASE_PATH);

  await app.listen(3000);
}
bootstrap();
