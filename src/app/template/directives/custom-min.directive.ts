import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{
   @Input() minimo!: number
    minimoTest : number = 1   //tambien se puede declarar aca en vez de input and deleting de min from the form
   
    constructor(){}

    validate(control: FormControl) {
        const inputValue  =  control.value;

        //console.log(inputValue);

        return (inputValue<this.minimoTest)?{'customMin':true}:null;
    }
}