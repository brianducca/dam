import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Log } from '../model/Log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  urlApi=environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getLogs(idElectrovalvula: number):Promise<Log[]>{
    let url = this.urlApi+`/api/electrovalvulas/${idElectrovalvula}/logs`;
    return this._http.get(url).toPromise().then((logs:Log[])=>{
      return logs;
      });
   }
}
