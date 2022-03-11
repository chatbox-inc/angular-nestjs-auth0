import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/', 'dist/client'),
      exclude: ['/api'],
    }),
    ConfigModule.forRoot({
      envFilePath: __dirname+'/../../../.env',
    }),
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
