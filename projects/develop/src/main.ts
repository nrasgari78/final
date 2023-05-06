import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
(window as any).pdfWorkerSrc = './assets/pdfjs/pdf.worker.min.js';

if (environment.production) {
  const styleTitle = 'color: #73849a; font-size: 24px; font-weight: bold; font-family: "IRANSans" !important; line-height: 2; border: #73849a solid 4px; padding: 5px; text-align: center; background-color: #ecf1f8;';
  const styleSub = 'color: #73849a; font-size: 16px; font-family: "IRANSans" !important; line-height: 2; border: #73849a solid 4px; padding: 13px; text-align: center;';
  const styleSite = 'color: #73849a; font-size: 16px; font-family: "IRANSans" !important; line-height: 2; border: #73849a solid 4px; padding: 13px; text-align: center;';
  console.log("%c وب اپلیکیشن تأمین اجتماعی من", styleTitle);
  console.log("%c طرح و اجرا: شرکت مشاور مدیریت و خدمات ماشینی تأمین", styleSub);
  console.log("%c https://profile.tamin.ir   ثبت نام در سامانه اطلاعات کاربران از طریق", styleSite);

  enableProdMode();
  
  if (window) {
    window.console.log = window.console.warn = window.console.info = window.console.debug = window.console.error = window.console.assert = function () {};
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log());
