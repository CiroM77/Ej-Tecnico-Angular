import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/servicios/app.service';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  
  loader ;

  constructor(private spinnerService: SpinnerService, private service:AppService) { 
    this.service.loader.subscribe(res => {
      this.loader = res;
    })

  };

  ngOnInit(): void {
   
  }

}
