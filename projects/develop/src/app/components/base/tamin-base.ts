import {Component, HostBinding, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TaminBaseService} from "../../provider/base/base.service";
import {TaminSecurityService} from "../../provider/security/tamin-security.service";
import {IonAccordionGroup} from "@ionic/angular";
import {Location} from "@angular/common";
import {MenuData, MenuItem} from "../../model/application-config-model";
import {Subscription} from "rxjs";

@Component({
  selector: 'tamin-base',
  templateUrl: './tamin-base.html',
  styleUrls: ['./tamin-base.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TaminBase implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'tamin-base';
  @ViewChild('accordionGroup') accordionGroup!: IonAccordionGroup;
  isUserLoggedIn : boolean = false;
  loggingSub!: Subscription;

  @Input() config!: any;
  searchText: any;

  constructor(private baseService: TaminBaseService, private securityService: TaminSecurityService, private _loc: Location) {
  }


  ngOnInit() {
    this.loggingSub = this.securityService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
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


  crmUrl() {
    window.open('https://1420.tamin.ir');
  }


  closeAccordion(): void {
    this.accordionGroup.value = undefined;
  }

  onRouterLinkActive(e: boolean) {
    if (e) {
      const url = this._loc.path();
      this.config.menuData.map((data: MenuData, index: number) => {
        if (data.items && data.items.some((i: MenuItem) => url === i.url )) {
              this.accordionGroup.value = `ion-accordion-${index}`
        } if (!data.items) {
          console.log(data.url)
          // this.accordionGroup.value = `ion-steper-${index}`
        }
      })
    }
  }

  webShare() {
    if (navigator.share) {
      navigator.share({
        title: '[ اپلیکیشن تأمین اجتماعی من ]',
        text: 'اپلیکیشن تأمین اجتماعی من تمامی سرویس‌های موجود و همچنین خدمات غیر حضوری جدید سازمان تأمین اجتماعی را در یک درگاه مجتمع و یکپارچه در خود جای داده است. ',
        url: 'https://hamrah.tamin.ir/pwa',
      }).then(() => {
      })
        .catch(error => {
        });
    } else {
      this.baseService.showAlert("در مرورگر مورد استفاده شما پشتیبانی نمی‌شود.")
    }
  }

  ngOnDestroy() {
    this.loggingSub.unsubscribe();

  }



}
