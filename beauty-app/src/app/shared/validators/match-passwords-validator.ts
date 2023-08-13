import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passwordCtrOne:string,
    passwordCtrTwo:string
    ): ValidatorFn {
    return(control) => {
        const group = control as FormGroup;
        const passCtr1 = group.get(passwordCtrOne)
        const passCtr2 = group.get(passwordCtrTwo)
        
        return passCtr1?.value === passCtr2?.value ? null : {matchPasswordsValidator: true};
    }
}