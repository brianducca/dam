import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Log } from '../model/Log';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  listadoLogs:Log[];
  constructor(private router:ActivatedRoute, public logServ:LogsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('entro a logs');
    let idDispositivo= this.router.snapshot.paramMap.get('id');
    console.log(`idDispositivo:${idDispositivo}`)
    this.callGetLogs(Number.parseInt(idDispositivo));

  }

  async callGetLogs(electrovalvulaId:number){
    let listado= await this.logServ.getLogs(electrovalvulaId);
    this.listadoLogs=listado;
  }

}
