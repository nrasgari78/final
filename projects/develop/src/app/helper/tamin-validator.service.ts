import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as moment from 'jalali-moment';

@Injectable({
  providedIn: 'root'
})
export class TaminValidatorService {

  constructor() { }

  static validNationalid(fc: FormControl) {
    var nid = fc.value;
    let Arr: any = Array.from(nid);
    var fakeCode = ["0000000000"];
    if (isNaN(nid)) {
      return { validNationalid: true };
    } else if (nid == "") {
      return null;
    } else if (nid.length > 10 || fakeCode.some((e) => e == nid)) {
      return { validNationalid: true };
    } else if (nid.length < 10) {
      return { validNationalid: true };
    } else {
      let Sum = 0;
      let Last;
      for (let i = 0; i < 9; i++) {
        Sum += +Arr[i] * (10 - i)
      }
      let divideRemaining = Sum % 11;
      if (divideRemaining < 2) {
        Last = divideRemaining;
      } else {
        Last = 11 - (divideRemaining);
      }
      let n = Arr[9];
      if(Last == n){
       return null
      } else {
        return { validNationalid: true };
      }
    }
  }

  // static validDate(fc: FormControl) {
  //   if (moment.default(fc.value).isValid()) {
  //     return null;
  //   } else {
  //     return { validDate: true };
  //   }
  // }

  static persianAlphabet(fc: FormControl) {
    var regexp = new RegExp("^[\0-9\u06F0-\u06F9\u202C\u064B\u064C\u064E-\u0652\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$");
    var value = fc.value;
    if (value == null) {
      return null;
    } else if (value == "") {
      return null;
    }
    else if (regexp.test(value)) {
      return null;
    } else {
      return { persianAlphabet: true };
    }
  }

  static postalCode(fc: FormControl) {
    var regexp = new RegExp(/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/);
    var value = fc.value;
    if (value == null) {
      return null;
    }
    else if (value == "") {
      return null;
    }
    else if (regexp.test(value)) {
      return null;
    } else {
      return { postalCode: true };
    }
  }

  static telNumber(fc: FormControl) {
    var regexp = new RegExp("^0\[0-9]{10}$");
    var value = fc.value;
    if (value == null) {
      return null;
    }
    else if (value == "") {
      return null;
    }
    else if (regexp.test(value)) {
      return null;
    } else {
      return { telNumber: true };
    }
  }

  static tenNumber(fc: FormControl) {
    var regexp = new RegExp("^[0-9]{10}$");
    var value = fc.value;
    if (value == null) {
      return null;
    }
    else if (value == "") {
      return null;
    }
    else if (regexp.test(value)) {
      return null;
    } else {
      return { tenNumber: true };
    }
  }

  static onlyNumber(fc: FormControl) {
    var regexp = new RegExp("^[0-9]*$");
    var value = fc.value;
    if (value == null) {
      return null;
    }
    else if (value == "") {
      return null;
    }
    else if (regexp.test(value)) {
      return null;
    } else {
      return { onlyNumber: true };
    }
  }

  static areEqual(formGroup: FormGroup) {
    let val;
    let valid = true;
    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];

        if (val === undefined) {
          val = control.value
        } else {
          if (val !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }
    if (valid) {
      return null;
    }
    return {
      areEqual: true
    };
  }

}
