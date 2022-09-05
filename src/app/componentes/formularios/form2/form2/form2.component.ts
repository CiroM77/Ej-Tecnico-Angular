import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  formCont = new FormGroup({
    usuario: new FormControl("usuario"),
    contraseña: new FormControl("contraseña"),
    iva: new FormControl("iva"),
    plan: new FormControl("plan"),
    referido: new FormControl("referido")
  });


  constructor(private formBuilder:FormBuilder) { 
    this.formCont=this.formBuilder.group(
      {
        usuario:["",[Validators.required]],
        contraseña:["",[Validators.required]],
        iva:["",[Validators.required]],
        plan:["",[Validators.required]],
        referido:["",[Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  
  get usuario() {
    return this.formCont.get("usuario");
  }

  get contrasenia() {
    return this.formCont.get("contraseña");
  }

  get referido() {
    return this.formCont.get("referido");
  }

  OnEnviar(event:Event) {

  }

}
