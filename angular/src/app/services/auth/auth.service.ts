import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap,map } from 'rxjs/operators';
import User from 'src/app/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user?: User
  sessionToken: string | null = null;

  constructor(private http:HttpClient,private router:Router) { }

  getLocalStorageToken(): string | any {
    this.sessionToken = localStorage.getItem('sessionToken')
    return this.sessionToken
  }

  setToken(token:string | any) {
    localStorage.setItem('sessionToken',token)
    this.sessionToken = token
  }
  setUser(user:User | undefined) {
      this.user = user
  }

  login(username:string,password:string) {
      return this.http.post(`http://localhost:5000/parse/login`,{username,password})
  }

  logout() {
    this.setUser(undefined)
    this.setToken(null)
    this.router.navigate(['login'])
  }

  get authenticate():Observable<any> {
    return this.http.get(`http://localhost:5000/parse/users/me`).pipe(map((data:User | undefined) => {
      this.setUser(data)
      this.setToken(data?.sessionToken)
      localStorage.removeItem('sessionToken')
    }
    ))
  }

}
