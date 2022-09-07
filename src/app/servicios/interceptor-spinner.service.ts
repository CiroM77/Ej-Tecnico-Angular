import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders, HttpHandler, HttpRequest, HttpInterceptor, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppService } from './app.service';
import { SpinnerService } from './spinner.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorSpinnerService implements HttpInterceptor {

  constructor(private service:SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        tap(event => {
          this.service.loader.next(true);
          if(event.type == HttpEventType.Response){
            if (event.status == 200) {
               this.service.loader.next(false);
            }
          }
        })
      )
  }
}
