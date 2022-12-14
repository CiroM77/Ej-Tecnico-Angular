import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

import { Usuario } from '../Clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private auntenticacionService:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     
    var currentUser = this.auntenticacionService.usuarioAutenticado;
    if (currentUser && currentUser.id_token){
      req=req.clone ({
                 setHeaders:{
                   Authorization:  `Bearer ${currentUser.id_token}`
              }        
      }
       )
    }
    console.log("El interceptor esta corriendo" + JSON.stringify(currentUser.id_token)); 
     return next.handle(req);
  }
}
