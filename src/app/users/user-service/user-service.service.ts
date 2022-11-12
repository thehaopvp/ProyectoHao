import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserLogin, UserResponse, User } from '../../auth/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private readonly http: HttpClient) { }


 getProfile(id:number):Observable<UserLogin>{
    return this.http.get<UserResponse>(`user/${id}`).pipe(
      map(Com => Com.user)
    );
  }

  getMyProfile():Observable<User>{
    return this.http.get<UserResponse>(`user/me`).pipe(
      map(Com => Com.user)
    );
  }
}
