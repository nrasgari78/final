import {Component,  HostBinding, Input} from '@angular/core';
import {TaminBaseService} from "../../../../../provider/base/base.service";
import {TaminSecurityService} from "../../../../../provider/security/tamin-security.service";
import {Location} from "@angular/common";
import {TaminUserInfo} from "../user-info/component/tamin-user-info";

@Component({
  selector: 'tamin-user',
  templateUrl: './tamin-user.html',
  styleUrls: ['./tamin-user.scss']
})
export class TaminUser {
  @HostBinding('class') classes = 'tamin-base';

  @Input() config!: any;
  isUserLoggedIn: boolean = false;
  currentUser: any;
  imgUser: any;
  color: any;

  constructor(private baseService: TaminBaseService, private securityService: TaminSecurityService, private _loc: Location) {
    this.initializeApp();
    this.securityService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.securityService.isUserInfo.subscribe(value => {
      this.currentUser = value;
    });
    this.securityService.isUserImage.subscribe(value => {
      this.imgUser = value;
    });
  }



  initializeApp() {
    this.securityService.callbackCheck();
    if (this.securityService.checkToken()) {
      this.securityService.isUserLoggedIn.next(true);
      this.securityService.getCurrentUserAndImageUser();
    }

  }

  ngOnInit() {
    this.getRandomColor();
  }


  clickItem(item: any): any {
    if (!item.hasOwnProperty('items') || item.items.length === 0) {
      this.baseService.navigate(item.url)
    }
  }

  removeIcon(item: any): any {
    if (!item.hasOwnProperty('items')) {
      return ''
    }
  }

  getInitials(lastName: string) {
    return lastName[0].toUpperCase();
  }

  getRandomColor() {
    const colors = ['#dde6e7', '#a297bf', '#ffd99b', '#e895a7', '#ffb98b', '#d8d6bf', '#bec2c8'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  webShare() {
    if (navigator.share) {
      navigator.share({
        title: '[ اپلیکیشن تأمین اجتماعی من ]',
        text: 'اپلیکیشن تأمین اجتماعی من تمامی سرویس‌های موجود و همچنین خدمات غیر حضوری جدید سازمان تأمین اجتماعی را در یک درگاه مجتمع و یکپارچه در خود جای داده است. ',
        url: 'https://hamrah.tamin.ir/pwa',
      }).then(() => {
      })
        .catch(() => {
        });
    } else {
      this.baseService.showAlert("در مرورگر مورد استفاده شما پشتیبانی نمی‌شود.")
    }
  }

  crmUrl() {
    window.open('https://1420.tamin.ir');
  }

  loginWithAccount() {
    this.securityService.redirectToAccount();
  }

  logOut() {
    this.baseService.showAlertConfirm("آیا برای خروج مطمئن هستید ؟", () => {
      this.securityService.redirectToLogout();
    });
  }



  openUserInfoPopover(e: Event) {
    this.baseService.createPopover(e, TaminUserInfo, this.currentUser, "bottom", "end")
  }
}
