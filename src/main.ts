import { NestFactory } from '@nestjs/core';
import { LoggerModule } from './logger/logger.module';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(LoggerModule);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
