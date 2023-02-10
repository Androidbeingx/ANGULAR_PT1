import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUser]',
  providers: [{provide: NG_VALIDATORS, useExisting: UserDirective, multi: true}]
})
export class UserDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    let valida : boolean = true;// -->no hay errores

    const forbidden_words: string[] = ['caca','pedo', 'culo', 'pis', 'testiculos', 'imbecil'];
    length = forbidden_words.length;

    while(length--) {
      if (control.value.indexOf(forbidden_words[length])!=-1){
        valida = false;
      }
    }
        
    return valida?null:{'word':true};
  }
  }



