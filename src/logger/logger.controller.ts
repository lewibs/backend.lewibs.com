import { Body, Controller, Post } from '@nestjs/common';
import { LoggerService } from './logger.service';
import {Log} from "../types/Log";
import {Input} from "../types/Input";

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post("log")
  async storeLog(@Body() log: Log) {
    return await this.loggerService.saveLog(log);
  }

  @Post('input')
  async saveInput(@Body() input: Input) {
    return await this.loggerService.saveInput(input);
  }
}
