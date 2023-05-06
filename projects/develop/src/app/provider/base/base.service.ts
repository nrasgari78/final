import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  PopoverController,
  ToastController
} from '@ionic/angular';
import {ExportToCsv} from 'export-to-csv';
import {ProgressComponent} from "../../components/progress/component/progress.component";
import {BehaviorSubject} from "rxjs";

export class TaminAlertButton {
  text?: string;
  handler?: (value: any) => boolean | void | { [key: string]: any };
}

export class TaminActionSheetButton {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  handler?: () => boolean | void | Promise<boolean | void>;
}

@Injectable({
  providedIn: 'root'
})
export class TaminBaseService {

  isLoading = false;
  modal: any;
  popover: any;
  isLoadingprogress: boolean=false;


  constructor(
    private loadingCtrl: LoadingController,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location,
    private _loadingController: LoadingController,
    private _toastController: ToastController,
    private _alertController: AlertController,
    private _actionSheetCtrl: ActionSheetController,
    private _modalCtrl: ModalController,
    public _popoverCtrl: PopoverController,
  ) {
  }

  navigateWithData(path: string, data: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        data: data
      }
    };
    this._router.navigate([path], navigationExtras);
  }

  navigate(path: string) {
    this._router.navigate([path]);
  }

  receivingData() {
    if (this._router.getCurrentNavigation()?.extras.state) {
      return this._router.getCurrentNavigation()?.extras.state;
    } else {
      return this._location.back();
    }
  }

  async presentLoader(msg?: any) {
    this.isLoading = true;
    return await this._loadingController.create({
      message: msg ? msg : 'لطفا منتظر بمانید ...',
    }).then(load => {
      load.present().then(() => {
        if (!this.isLoading) {
          load.dismiss().then(() => {
          });
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this._loadingController.dismiss().then((response) => {
    }).catch((err) => {
    });
  }

  blobToBase64(blob: Blob) {
    const reader = new FileReader();
    if (blob) {
      reader.readAsDataURL(blob);
    }
    return new Promise(resolve => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  }

  async showAlertConfirm(message: string, load?: any, cancel?: any) {
    const alert = await this._alertController.create({
      header: "پیام سیستم",
      message: message,
      backdropDismiss: false,
      buttons: [
        {
          text: "بله",
          handler: load ? load : () => {
          }
        },
        {
          text: "خیر",
          handler: cancel ? cancel : () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async showAlert(message: string, load?: any, textButton?: string) {
    const alert = await this._alertController.create({
      header: "پیام سیستم",
      message: message,
      backdropDismiss: false,
      buttons: [{
        text: textButton ? textButton : "متوجه شدم",
        handler: load ? load : () => {
        }
      }]
    });
    await alert.present();
  }

  async showalertWithHandler(message: string, buttons: TaminAlertButton[] | any) {
    const alert = await this._alertController.create({
      header: "پیام سیستم",
      message: message,
      backdropDismiss: false,
      buttons: buttons
    });
    await alert.present();
  }

  async showToast(message: string, color?: string, duration?: number) {
    const toast = await this._toastController.create({
      message: message,
      color: color ? color : 'dark',
      position: 'top',
      duration: duration ? duration : 2000,
      icon: 'notifications-outline'
    });
    await toast.present();
  }

  async presentActionSheet(header: string, buttons: TaminActionSheetButton[]) {
    const actionSheetButtons = buttons
    actionSheetButtons.push({
      text: 'بستن',
      role: 'cancel',
      icon: 'close'
    });
    const actionSheet = await this._actionSheetCtrl.create({
      header: header,
      buttons: actionSheetButtons,
    });
    await actionSheet.present();
  }

  openUrl(url: string) {
    window.open(url, "_blank");
  }

  openTel(tel: number) {
    window.open("tel:" + tel, "_self");
  }

  copyClipBoard(item: string) {
    navigator.clipboard.writeText(item).then(() => {
      this.showToast('کپی شد.', 'success')
    });
  }

  goBack(): void {
    this._location.back();
  }

  async createModal(component: any, data?: { [key: string]: any }, backdrop?: boolean) {
    this.modal = await this._modalCtrl.create({
      component: component,
      componentProps: data,
      backdropDismiss: backdrop ? backdrop : false,
      canDismiss: true
    });
    this.modal.present();
  }

  resolveModal() {
    return this.modal.onDidDismiss();
  }

  dismissModal(data?: any, role?: string, id?: string) {
    return this._modalCtrl.dismiss(data, role, id);

  }

  exportToCSV(data: any) {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'سازمان تامین اجتماعی',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data);
  }

  async createPopover(e: Event, componentName: any, data: any, side?: any, alignment?: any, size?: any) {
    this.popover = await this._popoverCtrl.create({
      component: componentName,
      event: e,
      side: side,
      alignment: alignment,
      componentProps: {data: data},
      size: size
    });
    await this.popover.present();
  }

  dismissPopover(data?: any, role?: string, id?: string) {
    return this._popoverCtrl.dismiss(data, role, id);
  }


  resolvePopover() {
    return this.popover.onDidDismiss();
  }

  getDate(date: any): string {
    const value = String(date)
    if (value.length === 8) {
      return value.slice(0, 4) + '/' + value.slice(-4, -2) + '/' + value.slice(-2);
    } else {
      return new Date(date).toLocaleDateString('fa-IR-u-nu-latn', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }
  }

}
