import { Body, Controller, Post } from '@nestjs/common';
import { LoggerService } from './logger.service';
import {Log} from "../types/Log";

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  async storeLog(@Body() log: Log) {
    console.log("controller");
    return await this.loggerService.saveLog(log);
  }
}
