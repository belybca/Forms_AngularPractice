import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    nombre : ['',[Validators.required, Validators.minLength(3)]],
    favoritos : this.fb.array([
      ['Majoras Mask', Validators.required],
      ['fenix rising', Validators.required]
    ], Validators.required)
  });
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   nombre : ''
    // })
  }
  nuevoFavorito : FormControl = this.fb.control('',Validators.required)

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  validateFormulario(campo : string){
      return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return}
    this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required)) // para que tambien valide el campo que se inserto dinamicamente
    // this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value, Validators.required)) otra manera de hacerlo mismo resultado
    this.nuevoFavorito.reset();
  }
  eliminarFavorito(i : number ){
    this.favoritosArray.removeAt(i);
  }
}
