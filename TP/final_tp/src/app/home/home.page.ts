import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Dispositivo } from '../model/Dispositivo';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivo:Dispositivo[];
  
  constructor(public dispositivoServ:DispositivoService, public alertController: AlertController) {
    
  }

  async callGetAllDevices(){
    let listado= await this.dispositivoServ.getListadoDispositivos();
    this.listadoDispositivo=listado;
  }
  
  ionViewDidEnter(){
    this.callGetAllDevices();
  }

  async deleteDispositivo(dispositivo:Dispositivo) {
    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alerta',
        subHeader: 'Eliiminar dispositivo',
        message: `Seguro desea eliminar el dispositivo ${dispositivo.nombre}?` ,
        buttons: [{text:"ok", handler:() => {
          alert.onDidDismiss();
          this.callDeleteDispositivo(dispositivo)
        }}]
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
   
  }

  callDeleteDispositivo(dispositivo:Dispositivo) {
    this.dispositivoServ.deleteDispositivo(dispositivo.dispositivoId);
    this.callGetAllDevices();
  }

}
