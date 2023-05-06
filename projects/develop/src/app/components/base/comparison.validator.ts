import {FormGroup} from "@angular/forms";

export function ComparisonValidator(controlName: string, matchingControlName: string, equal?: boolean) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (
      matchingControl.errors &&
      !matchingControl.errors['comparisonValidator']
    ) {
      return;
    }
    if ((control.value !== matchingControl.value) && equal) {
      matchingControl.setErrors({comparisonValidator: true});
    } else if ((control.value === matchingControl.value) && !equal) {
      matchingControl.setErrors({comparisonValidator: true});
    }
    else {
      matchingControl.setErrors(null);
    }
  };
}


