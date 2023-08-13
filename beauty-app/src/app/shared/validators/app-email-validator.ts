import { ValidatorFn } from "@angular/forms";

export function appEmailValidator (domains : string[]) : ValidatorFn {
    const domainStrings = domains.join("|");
    const regExp = new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\.(${domainStrings})$`)

    return (control) => {
            return control.value === "" ||  regExp.test(control.value)
            ? null : { appEmailValidator:true };
    }
}