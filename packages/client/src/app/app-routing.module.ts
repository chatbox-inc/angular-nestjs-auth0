import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JoinComponent} from "./join/join.component";
import {MypageComponent} from "./mypage/mypage.component";
import {TopComponent} from "./top/top.component";

const routes: Routes = [
  {path: "",redirectTo:"top", pathMatch:"full"},
  {path: "top",component: TopComponent},
  {path: "join",component: JoinComponent},
  {path: "mypage",component: MypageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
