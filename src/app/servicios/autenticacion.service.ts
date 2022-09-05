import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../Clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  urlAuth="https://tureservapp.com.ar:8081/api/authenticate";
  currentUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("El servicio de autenticación esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(
      sessionStorage.getItem("currentUser") || "{}"))
   }

   IniciarSesion(credenciales:any):Observable<any>
   {
     return this.http.post(this.urlAuth, credenciales).pipe(map(data=>{
       sessionStorage.setItem("currentUser", JSON.stringify(data));
       this.currentUserSubject.next(data);
       return data;
     }))
   }

   get usuarioAutenticado(){
     return this.currentUserSubject.value;
   }

}
