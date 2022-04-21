import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-agregardispositivo',
  templateUrl: './agregardispositivo.page.html',
  styleUrls: ['./agregardispositivo.page.scss'],
})
export class AgregardispositivoPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted:boolean
  constructor(public formBuilder: FormBuilder, public dispServ:DispositivoService,public alertController: AlertController) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      ubicacion: ['', [Validators.required]],
      electrovalvula: ['', [Validators.required, Validators.pattern('^[a-z]+$')]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted=true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.dispServ.postDispositivo(this.ionicForm.controls.nombre.value,this.ionicForm.controls.ubicacion.value,this.ionicForm.controls.electrovalvula.value)
      this.showAlert();
    }
  }

  async showAlert() {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Se ha guardado dispositivo',
      buttons: [{text:"ok", handler:() => {
        alert.onDidDismiss();
        this.isSubmitted = false;
        this.ionicForm.reset();
      }}]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
 
}


}
