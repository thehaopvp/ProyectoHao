import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mangas  = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
];

  ngOnInit(): void {

  }

  eventForm!: NgForm;
  title = 'proyectohaocomic';
  resultado="";
  dato="";

  bienvenida(): void{
      this.title = " Bienvenido a la pagina";
  }

  adios():void{
    this.title = "Adios que tengas un buen dia";
  }





}
