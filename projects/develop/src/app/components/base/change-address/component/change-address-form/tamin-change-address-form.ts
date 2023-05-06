import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaminBaseService} from "../../../../../provider/base/base.service";
import {TaminRestServices} from "../../../../../provider/rest/tamin-rest.service-observable";
import {AddressDataModel} from "../model/address-data-model";
import {catchError} from "rxjs/operators";
import {TaminValidatorService} from "../../../../../helper/tamin-validator.service";

@Component({
  selector: 'tamin-change-address-form',
  templateUrl: './tamin-change-address-form.html',
  styleUrls: ['./tamin-change-address-form.scss']
})
export class TaminChangeAddressForm {
  @Input() entityId!: any;
  @Input() item!: AddressDataModel;
  userAddressId = '';
  errorMessage = '';
  title = 'ثبت آدرس جدید';
  originalFormData : any;

  form!: FormGroup;
  @Input() userInfo!: any;
  addressTypes = [
    {name: 'منزل', value: 'HOME'},
    {name: 'محل کار', value: 'WORK'},
    {name: 'سایر', value: 'OTHER'},
  ];

  constructor(public formBuilder: FormBuilder, private baseService: TaminBaseService, private restServices: TaminRestServices,  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.formBuilder.group({
      postalCode: ['', Validators.compose([Validators.required, TaminValidatorService.postalCode])],
      postalAddress: ['', Validators.required],
      telephone: ['', Validators.compose([Validators.required, TaminValidatorService.telNumber])],
      addressType: ['', Validators.required]
    });
    if (this.item) {
      this.userAddressId = this.item.id;
      this.title = 'ویرایش آدرس';
      this.originalFormData = {
        postalCode: this.item.postalCode,
        postalAddress: this.item.postalAddress,
        telephone: this.item.telephone,
        addressType: this.item.addressType,
      }
      this.form.patchValue({
        ...this.originalFormData,
      })

    }
  }

  validation_messages = {
    'postalAddress': [
      {type: 'required', message: 'ورود اطلاعات ضروری است'}
    ],
    'postalCode': [
      {type: 'required', message: 'ورود اطلاعات ضروری است'},
      {type: 'postalCode', message: 'کدپستی معتبر نمی‌باشد'}
    ],
    'telephone': [
      {type: 'required', message: 'ورود اطلاعات ضروری است'},
      {type: 'telNumber', message: 'شماره تماس معتبر نمی‌باشد'}
    ],
    'addressType': [
      {type: 'required', message: 'ورود اطلاعات ضروری است'}
    ],
  };

  resetForm() {
    this.form.reset();
  }

  close() {
    this.isDirty();
  }

  isDirty(){
    const objSize = Object.keys(this.form.value).length;
    const check = Object.values(this.form.value).filter(i => !!i).length;
    if(objSize === check && JSON.stringify(this.form.value) !== JSON.stringify(this.originalFormData)) {
       this.baseService.showAlertConfirm('تغییرات شما ذخیره نگردیده است. مایل به بستن فرم می باشید؟', () => {
        this.baseService.dismissModal();
      })
  } else {
      this.baseService.dismissModal();
    }
  }

  onAddAddress() {
    const url = "https://profile.tamin.ir/api/v1.0/user-address/user-address-edit";
    const body = {
      id: this.userAddressId,
      ...this.form.value,
      userId: this.entityId,
    };
    this.restServices.update(url, this.entityId, body).pipe(catchError(err => this.errorMessage = err)).subscribe(
      () =>
        this.baseService.dismissModal({data: body})
    )
  }


}
