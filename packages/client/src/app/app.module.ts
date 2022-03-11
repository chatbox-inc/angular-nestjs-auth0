import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MypageComponent } from './mypage/mypage.component';
import { JoinComponent } from './join/join.component';
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MypageComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'royal-night-6877.us.auth0.com',
      clientId: '6DSRWil86qd60cq5jxIcaiSNqMHBeZCp',
      redirectUri: window.location.origin + "/mypage",
      audience: "https://royal-night-6877.us.auth0.com/api/v2/",
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          '/api/*',
          {
            uri: '/api/guest/*',
            allowAnonymous: true,
          },

        ]
      }
    }),
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
