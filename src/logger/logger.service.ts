import { Injectable } from '@nestjs/common';
import { Log } from 'src/types/Log';
import { MongoClient } from 'mongodb';

@Injectable()
export class LoggerService {
  Users = class {
    static async saveLog(log: Log) {
      const uri = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PW}@${process.env.MONGO_URL}/test?retryWrites=true&w=majority`;
      const client = new MongoClient(uri);
      await client.connect()
      console.log(uri);
      client.close();
      await client.close();
    }
  }
  
  saveLog(log: Log) {
    console.log("service");
    let client = this.Users.saveLog(log);
  }
}
