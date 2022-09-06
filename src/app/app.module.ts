import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner/banner.component';
import { Form1Component } from './componentes/formularios/form1/form1/form1.component';
import { Form2Component } from './componentes/formularios/form2/form2/form2.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { Pagina1Component } from './componentes/pagina1/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2/pagina2.component';
import { AppService } from './servicios/app.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './servicios/interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UnlessDirective } from './directiva/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    Form1Component,
    Form2Component,
    LoginComponent,
    Pagina1Component,
    Pagina2Component,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService,
    { provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
