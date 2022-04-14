import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  urlApi="http://localhost:8000";

  constructor(private _http: HttpClient) { }

  getLogs(idElectrovalvula: number):Promise<Log[]>{
    let url = this.urlApi+`/api/electrovalvulas/${idElectrovalvula}/logs`;
    return this._http.get(url).toPromise().then((logs:Log[])=>{
      return logs;
      });
   }
}
