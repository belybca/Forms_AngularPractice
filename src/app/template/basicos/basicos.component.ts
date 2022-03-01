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
  //en el caso que se quiera inicializar la form y se pone en el HTML [ngModel]="initForm.name" example [ngModel]="initForm.price"
  //I just  going to comented because I don't like it much 
  initForm={
    producto:'',
    exist:1,
    price:1

  }
  // guardar(miFormulario : NgForm)
  guardar(){
    
    // console.log(this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm();
    // en reset tambien se pueden establecer los valores con q va a quedar el form despues del reset
    // this.miFormulario.resetForm({
    //   producto:'',
    //   price:0,
    //   exist:0
    // });
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
