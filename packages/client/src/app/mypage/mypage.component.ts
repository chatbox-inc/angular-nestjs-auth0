import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss']
})
export class MypageComponent implements OnInit {

  public apiUser$:Observable<any>;

  constructor(public auth: AuthService, private client: HttpClient) {
    this.apiUser$ = this.auth.user$.pipe(
      switchMap(()=>{
        return this.client.get("/api/profile")
      }),
      map((r:any) => r.user)
    )
  }

  ngOnInit(): void {
    this.apiUser$.subscribe(r=>{
      console.log(r)
    })
  }

}
