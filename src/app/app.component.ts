import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){

  }
  title = 'ParqueaderoPF';
  inicio= true;
  ocultarDiv(){
    this.inicio=false;
  }
  aparecerDiv(){
    this.inicio=true;
  }
}
