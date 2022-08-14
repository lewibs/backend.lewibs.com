import { Module } from '@nestjs/common';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
