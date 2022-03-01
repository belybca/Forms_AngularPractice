import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos :Favorito[];
}
interface Favorito{
  id:number;
  nombre:string;
 
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario! :NgForm
  nuevoJuego: string = '';
  persona : Persona ={
    nombre:'Albelis',
    favoritos:[
      {id:1, nombre: 'Majoras Mask'},
      {id:2, nombre: 'Fenix Rising'}
    ]
  }
 
  guardar(){
    console.log("Posteado");
 }
 validName(){
   return this.miFormulario?.controls['PersonName']?.invalid &&
          this.miFormulario?.controls['PersonName']?.touched
 }
 eliminarFavorito(index : number){
  this.persona.favoritos.splice(index,1);
 }
 agregarJuego(){
   const juegofavorito : Favorito = {
     id: this.persona.favoritos.length+1,
     nombre: this.nuevoJuego
       }
   this.persona.favoritos.push({...juegofavorito});
   this.nuevoJuego = "";
 }
}
