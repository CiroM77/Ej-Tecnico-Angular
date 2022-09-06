import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Categoria } from 'src/app/Clases/categoria';
import { AppService } from 'src/app/servicios/app.service';



@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  miCategoria:any;

  form = new FormGroup({
    name: new FormControl("name"),
    negocio: new FormControl("negocio"),
    tipo: new FormControl("tipo"),
    email: new FormControl("email"),
    telefono: new FormControl("telefono"),
    ciudad: new FormControl("ciudad")
  });


  constructor(private formBuilder:FormBuilder, private datosServicios:AppService) {
    this.form=this.formBuilder.group(
      {
        name:["",[Validators.required]],
        negocio:["",[Validators.required]],
        tipo:["",[Validators.required]],
        email:["",[Validators.required, Validators.email]],
        telefono:["",[Validators.required, Validators.pattern]],
        ciudad:["",[Validators.required]]
      }
    )
   }

  ngOnInit(): void {
    this.datosServicios.obtenerCategorias().subscribe(Categoria =>{
      console.log("Categorias" + JSON.stringify(Categoria));
      console.log(Categoria);
      this.miCategoria=Categoria;

    }

    )
  }

  get nombre() {
    return this.form.get("nombre");
  }

  get negocio() {
    return this.form.get("negocio");
  }

  get telefono() {
    return this.form.get("telefono");
  }  

  get email() {
    return this.form.get("email");
  }

  get ciudad() {
    return this.form.get("ciudad");
  }
  
  OnEnviar(event:Event) {

   }

}
