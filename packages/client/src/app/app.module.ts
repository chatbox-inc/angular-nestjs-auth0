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
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
