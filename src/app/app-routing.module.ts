import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login/login.component';
import { Pagina1Component } from './componentes/pagina1/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2/pagina2.component';


const routes: Routes = [
  { path: "registro1" , component: Pagina1Component },
  { path: 'registro2',  component: Pagina2Component  },
  { path: "login",      component:LoginComponent },
  { path:"**" , redirectTo:"login" , pathMatch:"full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
