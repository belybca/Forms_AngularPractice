import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit{

  // Agregar el formulario manual
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl(),
  //   'precio'     : new FormControl(),
  //   'existencias': new FormControl()
  // })

  //usando el form builder
  miFormulario: FormGroup = this.fb.group({
    nombre : ["",[Validators.required,Validators.minLength(3)]],//["lo que va adentro del campo","validador sincronos",validadores asincronos] si es mas de un validador se pone entre llaves cuadradas
    precio : ["",[Validators.required,Validators.min(1)]],
    existencias : ["",[Validators.required,Validators.min(1)]]
  })
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre : '',
      precio : '',
      existencias : ''
    })
  }
  campoEsValido(campo : string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched() ; 
      return;
    }
    
    console.log (this.miFormulario.value);
    
    this.miFormulario.reset();
  }
}
