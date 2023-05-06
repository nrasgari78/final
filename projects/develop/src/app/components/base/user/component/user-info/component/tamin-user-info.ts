import {Component, Input} from '@angular/core';
import {TaminBaseService} from "../../../../../../provider/base/base.service";
import {TaminChangePassword} from "../../../../change-password/component/tamin-change-password";
import {TaminChangeAddress} from "../../../../change-address/component/tamin-change-address";
import {TaminRestServices} from "../../../../../../provider/rest/tamin-rest.service-observable";
import {TaminChangePhone} from "../../../../change-phone/tamin-change-phone";

@Component({
  selector: 'user-info',
  templateUrl: './tamin-user-info.html',
  styleUrls: ['./tamin-user-info.scss']
})
export class TaminUserInfo{
  @Input() data!: any;

  constructor(private baseService: TaminBaseService, private restServices: TaminRestServices) {
  }

  getDate(date: any): any{
    return this.baseService.getDate(date)
  }

  openChangePasswordModal() {
    this.baseService.createModal(TaminChangePassword, {nationalCode: this.data.nationalCode } ).then(() => {
      this.baseService.resolveModal().then((data: any) => {
        if (!!data.data) {
          this.baseService.dismissModal({modalData: data});
        }
      });
    })
  }

  openChangeAddressModal() {
    this.baseService.createModal(TaminChangeAddress, {entityId: this.data.entityId} ).then(() => {
      this.baseService.resolveModal().then((data: any) => {
        if (!!data.data) {
          this.baseService.dismissModal({modalData: data});
        }
      });
    })
  }

  openChangePhoneNoModal () {
    this.baseService.createModal(TaminChangePhone, {currentMobile: this.data.mobile } ).then(() => {
      this.baseService.resolveModal().then((data: any) => {
        if (!!data.data) {
          this.baseService.dismissPopover({modalData: data});
        }
      });
    })
  }
}
