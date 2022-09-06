import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Clases/categoria';
import { User } from 'src/app/clases/user';
import { AppService } from 'src/app/servicios/app.service';



@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  miCategoria:any;
  comenzar=false;
  usu:string;
  email:string;
  firstName: string;
  activated:true;
  authorities:string;
  pass:string;


  form = new FormGroup({
    name: new FormControl("name"),
    negocio: new FormControl("negocio"),
    tipo: new FormControl("tipo"),
    email: new FormControl("email"),
    telefono: new FormControl("telefono"),
    ciudad: new FormControl("ciudad")
  });

  formCont = new FormGroup({
    usuario: new FormControl("usuario"),
    contraseña: new FormControl("contraseña"),
    iva: new FormControl("iva"),
    plan: new FormControl("plan"),
    referido: new FormControl("referido")
  });


  constructor(private formBuilder:FormBuilder, private datosServicios:AppService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        name:["",[Validators.required]],
        negocio:["",[Validators.required]],
        tipo:["",[Validators.required]],
        emailF:["",[Validators.required, Validators.email]],
        telefono:["",[Validators.required, Validators.pattern]],
        ciudad:["",[Validators.required]]
      }
    )
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

  get emailF() {
    return this.form.get("emailf");
  }

  get ciudad() {
    return this.form.get("ciudad");
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
  
  onCreate():void {
    const user = new User(this.usu, this.email, this.firstName, this.activated, this.authorities, this.pass);
    this.datosServicios.crearUser(user).subscribe(
      data => {
        console.log("Usuario añadido");
        this.ruta.navigate(['']);
      }, err => {
        alert("Falló");
        this.ruta.navigate(['']);
      }
    )
  }

   }

