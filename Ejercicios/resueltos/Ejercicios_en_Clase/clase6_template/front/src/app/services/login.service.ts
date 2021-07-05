import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:5000/api';
  token;
 
  constructor(private http: HttpClient,private router: Router) { }
  async login(username: string, password: string) {
    let response = await this.http.post<any>(this.uri + '/authenticate', {username: username,password: password}).toPromise();
    if (response!=null){
      this.router.navigate(['home']);
      console.log(response)
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
