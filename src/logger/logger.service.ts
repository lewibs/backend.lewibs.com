import { Injectable } from '@nestjs/common';
import { Log } from 'src/types/Log';
import {Users} from "../clients/Users.client";
import { Input } from 'src/types/Input';

@Injectable()
export class LoggerService {
  saveLog(log: Log) {
    return Users.saveLog(log);
  }

  saveInput(input: Input) {
    return Users.saveInput(input);
  }
}
