import {Component, Input} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaminBaseService} from "../../../../provider/base/base.service";
import {TaminRestServices} from "../../../../provider/rest/tamin-rest.service-observable";
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {ComparisonValidator} from "../../comparison.validator";



@Component({
  selector: 'tamin-change-password',
  templateUrl: './tamin-change-password.html',
  styleUrls: ['./tamin-change-password.scss']
})
export class TaminChangePassword {
  form!: FormGroup;
  @Input() nationalCode!: string;
  requiredErrMsg = 'ورود اطلاعات ضروری است';
  confirmPasswordError = 'گذرواژه جدید با تکرار آن یکسان نمی باشد';
  strongPassword = false;

  constructor(public formBuilder: FormBuilder ,private baseService: TaminBaseService, private restService: TaminRestServices) {
  }

  ngOnInit() {
    this.setupForm();
  }



  setupForm() {
    this.form = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      passwordFieldName: ['', Validators.required],
      repeatedPasswordFieldName : ['', Validators.required]
    }, {
      validator: ComparisonValidator("passwordFieldName", "repeatedPasswordFieldName", true) as AbstractControlOptions
  }
  );
  }

  resetForm() {
    this.form.reset();
  }

  close() {
    this.baseService.dismissModal();
  }

  onPasswordCheckerChanged(event: boolean) {
    // this.strongPassword = event;
  }

  changePassword() {
    const data = {
      oldPassword: this.form.get('oldPassword')!.value,
      password: this.form.get('passwordFieldName')!.value
    };
    this.baseService.presentLoader();
    this.restService.create('https://profile.tamin.ir/api/authorized/change-password', data).pipe(catchError(
      reason => {
        this.baseService.dismissLoader();
        if(reason.error) {
          this.baseService.showAlert(reason.error);
        }
        else {
          this.baseService.showAlert('دریافت اطلاعات از سرویس دهنده مرکزی در این لحظه مقدور نیست.')
        }
        return EMPTY
      })).subscribe(() => {
      this.baseService.dismissLoader();
      const message = 'گذرواژه با موفقیت تغییر یافت'
      this.baseService.showAlert( message, () => {
        this.baseService.dismissModal();
      });
    })




  }


}
