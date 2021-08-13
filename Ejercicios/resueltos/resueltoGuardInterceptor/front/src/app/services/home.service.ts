import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  uri = 'http://localhost:5000/api';
  token;
 
  constructor(private _http: HttpClient) { }

  consulta(){
    return this._http.get(this.uri+"/test").toPromise();
  }
}
