import { NestFactory } from '@nestjs/core';
import { LoggerModule } from './logger/logger.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggerModule);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
