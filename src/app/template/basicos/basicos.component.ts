import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!  : NgForm

  constructor() { }

  ngOnInit(): void {
  }
  // guardar(miFormulario : NgForm)
  guardar(){
    
    console.log(this.miFormulario);
  }
  nombrevalido() : boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched
  }
  preciovalido(){
    return (this.miFormulario?.controls['price']?.value<1) &&
    this.miFormulario?.controls['price']?.touched
    // return  this.miFormulario?.controls['price']?.touched;
  }
}
