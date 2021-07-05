import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  uri = 'http://localhost:5000/api';
  token;
 
  constructor(private http: HttpClient,private router: Router) { }

  consulta(){
    return this.http.get(this.uri+"/test");
  }
}
