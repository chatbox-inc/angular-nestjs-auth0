import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("register")
  async register(@Body() body): Promise<any> {
    console.log("body",body)
    console.log("name",body.name)
    const result = await this.appService.register(body.email,body.password,body.name)
    console.log(result)
    return {
      "hello": "hello"
    };
  }
}
