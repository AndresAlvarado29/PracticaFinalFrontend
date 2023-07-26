import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ParqueaderoPF';
  inicio= true;
  ocultarDiv(){
    this.inicio=false;
  }
  aparecerDiv(){
    this.inicio=true;
  }
}
