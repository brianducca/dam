import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent implements OnInit {

  public formDispositivo:FormGroup=new FormGroup({});;

  constructor(private fBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
  }


  private crearForm(){
    //vamos a tener un obj con nombre y ubicacion
    this.formDispositivo=this.fBuilder.group({
      nombre:['',Validators.required],
      ubicacion:['',Validators.required],
      email:['',[Validators.email , Validators.required]]
    });
  }

  guardarDispositivo(){
    console.log("Submit");
    console.log(this.formDispositivo.get("nombre")?.value);
    console.log(this.formDispositivo.get("ubicacion")?.value);
    console.log(this.formDispositivo.get("email")?.value);
    
  }

}
