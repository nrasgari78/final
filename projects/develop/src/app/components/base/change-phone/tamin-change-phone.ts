import {Component, Input} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaminBaseService} from "../../../provider/base/base.service";
import {TaminValidatorService} from "../../../helper/tamin-validator.service";
import {TaminRestServices} from "../../../provider/rest/tamin-rest.service-observable";
import {BehaviorSubject, EMPTY, Subject} from "rxjs";
import {ComparisonValidator} from "../comparison.validator";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'tamin-change-phone',
  templateUrl: './tamin-change-phone.html',
  styleUrls: ['./tamin-change-phone.scss']
})
export class TaminChangePhone {
  form!: FormGroup;
  @Input() currentMobile!: string;
  requiredErrMsg = 'ورود اطلاعات ضروری است';
  confirmPasswordError = 'شماره تلفن همراه فعلی با جدید نمی تواند یکسان باشد';
  limitedTime = 10;

  otpHashCode: any;
  startTimer$: BehaviorSubject<boolean> =  new BehaviorSubject(false);


  constructor(public formBuilder: FormBuilder, private baseService: TaminBaseService, private restService: TaminRestServices) {
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.formBuilder.group({
      currentMobile: [''],
      mobile: ['', Validators.compose([Validators.required, TaminValidatorService.telNumber])],
    }, {
      validator: ComparisonValidator("currentMobile", "mobile", false)
    } as AbstractControlOptions);
    this.form.patchValue({
      currentMobile: this.currentMobile,
    })
  }

  resetForm() {
    this.form.reset();
  }

  close() {
    this.baseService.dismissModal();
  }

  generateOtpCodeAndSendSms() {
    // const mobile = this.form.get('mobile')?.value;
    // const searchParams = JSON.stringify([
    //   {property: 'mobileNumber', value: mobile, operator: 'equal'},
    //   {property: 'serviceName', value: 'changeMobileNumber', operator: 'equal'}]);
    // const url = `https://profile.tamin.ir/api/users/get-otp?filter=${searchParams}`;
    // this.baseService.presentLoader();
    // this.restService.getAll(url).pipe(catchError(reason => {
    //   this.baseService.dismissLoader();
    //   if (reason.error.message === 'Previous OTP is still valid. Cannot generate a new one.') {
    //     this.baseService.showAlert('آخرین رمز یکبار مصرف دریافتی همچنان معتبر میباشد', () => {
    //       this.limitedTime = reason.error.remainingTimeInSeconds * 1000;
    //       console.log(this.limitedTime)
    //         // this.startTimer$.next(true);
    //       }
    //     )
    //   } else if (reason.error.message && typeof (reason.error.message) === 'string' && reason.error.message !== '') {
    //     this.baseService.showAlert(reason.error.message);
    //   } else if (reason.error && typeof (reason.error) === 'string' && reason.error !== '') {
    //     this.baseService.showAlert(reason.error);
    //   } else {
    //     this.baseService.showAlert('دریافت اطلاعات از سرویس دهنده مرکزی در این لحظه مقدور نیست.')
    //   }
    //   return EMPTY;
    // })).subscribe(value => {
    //   this.baseService.dismissLoader();
    //   this.baseService.showAlert(` رمز یکبار مصرف به شماره همراه  ${mobile}ارسال شد.`, () => {
    //     this.otpHashCode = value.data.hash;
    //     this.startTimer$.next(true);
    //   })
    // })
  }
}
