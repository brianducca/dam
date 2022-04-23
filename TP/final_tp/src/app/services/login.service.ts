import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = environment.apiUrl;
  token;
 
  constructor(private http: HttpClient,private router: Router) { }
  async login(username: string, password: string) {
    let response = await this.http.post<any>(this.uri + '/api/authenticate', {username: username,password: password}).toPromise();
    if (response!=null){
      this.router.navigate(['home']);
      localStorage.setItem('token', response.token);
    } 
    }

    logout() {
      localStorage.removeItem('token');
    }
   
    public get logIn(): boolean {
      return (localStorage.getItem('token') !== null);
    }

  
}