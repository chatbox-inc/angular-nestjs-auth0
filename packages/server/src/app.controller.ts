import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  async profile(@Request() req){
    const result = await this.appService.profile(req.user.sub as string)
    console.log(result)
    return {hoge:"piyo",payload: req.user,user:result}
  }
}
