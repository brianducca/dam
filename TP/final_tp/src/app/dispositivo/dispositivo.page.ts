import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/Dispositivo';
import { Medicion } from '../model/Medicion';
import { DispositivoService } from '../services/dispositivo.service';
import * as Highcharts from 'highcharts';
import { AlertController } from '@ionic/angular';
import { KpapipePipe } from '../pipes/kpapipe.pipe';
import { MedicionService } from '../services/medicion.service';
import * as moment from 'moment';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);


@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public myChart;
  private chartOptions;
  public dispositivo:Dispositivo;
  public medicion:Medicion;
  public showOpenButton:boolean;
  public idElectrovalvula:Number;
  public idDispositivo:string;
  public requiereRiego:Boolean;

  constructor(private router:ActivatedRoute, private dServ:DispositivoService, private mServ:MedicionService, public alertController: AlertController) {
    this.showOpenButton = true;
    
   }

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
   
   // this.generarChart(this.medicion.valor);
  }
  async loadDispositivo() {
    this.dispositivo = await this.dServ.getDispositivo(Number.parseInt(this.idDispositivo));
    this.medicion = await this.dServ.getUltimaMedicion(Number.parseInt(this.idDispositivo));
    this.idElectrovalvula = this.dispositivo.electrovalvulaId;
    if(this.medicion.valor >= 30 && this.medicion.valor <= 60) {
      this.presentAlert();
      this.requiereRiego = true;
      
    }
    this.generarChart(10);
    this.myChart.update({series: [{
      name: 'kPA',
      data: [Number.parseInt(this.medicion.valor.toString())],
      tooltip: {
          valueSuffix: ' kPA'
      }
      }]});
    
   
  }
  

  
  async ionViewDidEnter() {
    this.loadDispositivo();
  }

  async openElectrovalvula(event) {
    await this.dServ.changeStatusElectrovalvula(true, this.dispositivo.electrovalvulaId);
    this.showOpenButton = false;
  }

  async closeElectrovalvula(event) {
    await this.dServ.changeStatusElectrovalvula(false, this.dispositivo.electrovalvulaId);
    let nuevaMedicion = Math.floor(Math.random()* this.medicion.valor);
    await this.mServ.addMedicion(new Medicion(0,moment().format("YYYY-MM-DD hh:mm:ss"),nuevaMedicion,this.dispositivo.dispositivoId))
    this.showOpenButton = true;
    this.myChart.update({series: [{
      name: 'kPA',
      data: [Number.parseInt(nuevaMedicion.toString())],
      tooltip: {
          valueSuffix: ' kPA'
      }
      }]});
  }

  async presentAlert() {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Condicion del suelo',
      message: `El suelo tiene  ${new KpapipePipe().transform(this.medicion.valor)}, debe abrir electrovalvula` ,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  generarChart(valorObtenido:Number) {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: this.dispositivo.nombre
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

}

