import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  modoNocturno: boolean=false;
  constructor(){

  }
  ngOnInit(){
    console.log(this.modoNocturno)
    this.modo();
  }
  title = 'ParqueaderoPF';
  inicio= true;
  modo(){
    if(this.modoNocturno==true){
      this.cambiarModo(this.modoNocturno);
    }
  }
  ocultarDiv(){
    this.inicio=false;
  }
  aparecerDiv(){
    this.inicio=true;
  }
  cambiarModo(elemento: Boolean){
      var botonU=document.getElementById('encabezado');
      var botonU2=document.getElementById('pie');
      var botonU3=document.getElementById('puestos'); 
      var botonU4=document.getElementById('container');
      var botonU5=document.getElementById('containerC');
      var botonU6=document.getElementById('containerH');
      var botonU7=document.getElementById('containerT');
      var botonU8=document.getElementById('containerV');
      var botonU9=document.getElementById('h1')
    console.log(elemento)
    if(elemento==true){
    botonU?.classList.remove('encabezado');
    botonU9?.classList.remove('logotipo')
    botonU9?.classList.add('logotipoNocturno')
    botonU?.classList.add('nocturno');
    botonU2?.classList.remove('piedepagina');
    botonU2?.classList.add('pieNocturno');  
    botonU3?.classList.remove('puestos');
    botonU3?.classList.add('nocturno');
    botonU4?.classList.remove('container');
    botonU4?.classList.add('nocturno'); 
    botonU5?.classList.remove('container');
    botonU5?.classList.add('nocturno');
    botonU6?.classList.remove('container');
    botonU6?.classList.add('nocturno');
    botonU7?.classList.remove('container');
    botonU7?.classList.add('nocturno');
    botonU8?.classList.remove('container');
    botonU8?.classList.add('nocturno');    
    }else{
    botonU?.classList.remove('nocturno');
    botonU?.classList.add('encabezado');
    botonU9?.classList.remove('logotipoNocturno')
    botonU9?.classList.add('logotipo')
    botonU2?.classList.remove('pieNocturno');
    botonU2?.classList.add('piedepagina');
    botonU3?.classList.remove('nocturno');
    botonU3?.classList.add('puestos'); 
    botonU4?.classList.remove('nocturno');
    botonU4?.classList.add('container');
    botonU5?.classList.remove('nocturno');
    botonU5?.classList.add('container');
    botonU6?.classList.remove('nocturno');
    botonU6?.classList.add('container');
    botonU7?.classList.remove('nocturno');
    botonU7?.classList.add('container');
    botonU8?.classList.remove('nocturno');
    botonU8?.classList.add('container');  
    }
  }     
}
