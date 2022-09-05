import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAuth:FormGroup;
  constructor(private formBuilder:FormBuilder, private ruta:Router, private autenticacionService:AutenticacionService) {
    this.formAuth=this.formBuilder.group(
      {
        username:["",[Validators.required]],
        password:["",[Validators.required]]
      })
   }

  ngOnInit(): void {
  }

  get user() {
    return this.formAuth.get("user");
  }

  get password() {
    return this.formAuth.get("password");
  }
  
  OnEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.formAuth.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(["/registro1"])
    })
  }
}
