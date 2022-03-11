import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JoinComponent} from "./join/join.component";
import {MypageComponent} from "./mypage/mypage.component";
import {TopComponent} from "./top/top.component";
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {path: "",redirectTo:"top", pathMatch:"full"},
  {path: "top",component: TopComponent},
  {path: "join",component: JoinComponent},
  // TODO: 任意のURL への遷移 https://github.com/auth0/auth0-angular/blob/8978a1ef74428528fe7a426db30531215c722219/projects/auth0-angular/src/lib/auth.guard.ts#L39
  {path: "mypage",component: MypageComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
