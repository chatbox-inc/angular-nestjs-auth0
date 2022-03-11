import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MypageComponent } from './mypage/mypage.component';
import { JoinComponent } from './join/join.component';
import {AuthModule} from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MypageComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'royal-night-6877.us.auth0.com',
      clientId: '6DSRWil86qd60cq5jxIcaiSNqMHBeZCp',
      redirectUri: window.location.origin + "/mypage"
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
