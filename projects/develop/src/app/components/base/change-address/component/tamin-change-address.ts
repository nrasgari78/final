import {Component, Input} from '@angular/core';
import {TaminBaseService} from "../../../../provider/base/base.service";
import {TaminChangeAddressForm} from "./change-address-form/tamin-change-address-form";
import {EMPTY, Observable, of} from "rxjs";
import {TaminRestServices} from "../../../../provider/rest/tamin-rest.service-observable";
import {catchError, map, tap} from "rxjs/operators";
import {AddressDataModel} from "./model/address-data-model";

@Component({
  selector: 'tamin-change-address',
  templateUrl: './tamin-change-address.html',
  styleUrls: ['./tamin-change-address.scss']
})
export class TaminChangeAddress {
  @Input() entityId!: any;
  userAddress$!: Observable<any>;
  disableBtn$!: Observable<boolean>;

  constructor(private baseService: TaminBaseService, private restServices: TaminRestServices) {
  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.baseService.presentLoader();
    this.userAddress$ = this.restServices.getPage('https://profile.tamin.ir/api/v1.0/user-address/user-address-get', 1, 10, [], []).pipe(map(data => data['data']['list']), tap(addresses => {
    this.disableBtn$ = of(addresses.length === 3)
      this.baseService.dismissLoader();
    }), catchError(err => {
      this.baseService.dismissLoader();
      this.baseService.showAlert(err.error.reason);
      return EMPTY
    }))
  }


  close() {
    this.baseService.dismissModal();
  }


  openAddressFormModal(item?: AddressDataModel) {
    this.baseService.createModal(TaminChangeAddressForm, {entityId: this.entityId, item: item}).then(() => {
      this.baseService.resolveModal().then((data: any) => {
        if(data.data) {
          this.setData()
        }
      });
    })
  }

  delete(address: any) {
    this.baseService.showAlertConfirm("آیا از حذف اطلاعات اطمینان دارید؟", () => {
      this.baseService.presentLoader()
      const url = `https://profile.tamin.ir/api/v1.0/user-address`;
      this.restServices.delete(url, `${this.entityId}/${address.id + ''}`).pipe(catchError(err => {
          this.baseService.dismissLoader();
          this.baseService.showAlert(err.error.reason);
          return EMPTY
        }
      )).subscribe(() => {
          this.baseService.dismissLoader();
          const message = 'حذف اطلاعات با موفقیت انجام شد'
          this.baseService.showAlert(message);
          this.setData();
        }
      )
    })

  }


}
