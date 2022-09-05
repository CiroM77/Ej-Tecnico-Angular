import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../Clases/categoria';
import { Usuario } from '../Clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  url:string = "https://tureservapp.com.ar:8081/api/categorias";
                

  obtenerCategorias():Observable<Categoria>{
    return this.http.get<Categoria>(this.url);
}
}
