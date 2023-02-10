import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPassrepeat]',
  providers: [{provide: NG_VALIDATORS, useExisting: PassrepeatDirective, multi: true}]
})
export class PassrepeatDirective implements Validator {

  @Input() param: any;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control.value)
    console.log(this.param)
    if(control && control.value!= this.param){
      return {'repeat': true};
    }else{
      return null;
    }
  }
  

}
