import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Categoria } from '../Clases/categoria';
import { Usuario } from '../Clases/usuario';
import { AutenticacionService } from './autenticacion.service';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient, private auntenticacionService:AutenticacionService) { }


  loader = new BehaviorSubject<Boolean>(false);

  url:string = "https://tureservapp.com.ar:8081/api/categorias";
  urlCreate:string = " https://tureservapp.com.ar:8081/api/newuser";
  urlVUser:string = "https://tureservapp.com.ar:8081/api/newuserexist/$nombreUsuario";
  urlVemail:string = "https://tureservapp.com.ar:8081/api/$newuserexisMailt";
              

  obtenerCategorias():Observable<Categoria>{
    return this.http.get<Categoria>(this.url);
}

  public crearUser(user:User): Observable<any>{
    return this.http.post<any>(this.urlCreate, user);
  }

  public getUserExist(usu:string): Observable<User>{
    return this.http.get<User>(this.urlVUser);
  } 

  public getEmailExist(email:string): Observable<User>{
    return this.http.get<User>(this.urlVemail);
  } 


}
