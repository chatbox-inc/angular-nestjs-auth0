import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginWithRedirect({
      appState: { target: '/mypage' }
    }).subscribe((r)=>{
      console.log("logined",r,location.origin)
    })
  }

}
