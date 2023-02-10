import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPass]',
  providers: [{provide: NG_VALIDATORS, useExisting: PassDirective, multi: true}]
})
export class PassDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let valida : boolean = false;// -->hay errores

    const contain_numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
    length = contain_numbers.length;

    while(length--) {
      if (control.value.indexOf(contain_numbers[length])!=-1){
        valida = true;
      }
    }

    return valida?null:{'number':true};
  }


}
