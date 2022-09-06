import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Clases/categoria';
import { Usuario } from '../Clases/usuario';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient, private auntenticacionService:AutenticacionService) { }

  url:string = "https://tureservapp.com.ar:8081/api/categorias";
                

  obtenerCategorias():Observable<Categoria>{
    var currentUser = this.auntenticacionService.usuarioAutenticado;
    const httpOptions = {
      headers: new HttpHeaders({
      Authorization: `Bearer + ${currentUser.id_token}`
      })};
      console.log("Probando si se envia el Token" + JSON.stringify(currentUser.id_token)); 
    return this.http.get<Categoria>(this.url, httpOptions);
}
}
