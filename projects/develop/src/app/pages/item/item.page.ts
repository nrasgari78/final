import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  exampleOne = `
<tamin-item
    *ngFor="let item of datas, let i=index"
    [label]= "item.itemLabel"
    [title]="item.itemTitle"
    [dir]="item.itemDirection"
    [color]="item.itemColor">
</tamin-item>`

  exampleTwo = `
<tamin-item
    label="درخواست گواهی"
    title="صدور گواهی حقوق"
    fill="outline"
    lines="none">
</tamin-item>
`

  exampleThree = `
 <tamin-item
     label="تاریخ پیگیری"
     title="شماره پیگیری"
     lines="full">
</tamin-item>
<tamin-item
     label="درخواست تقسیط"
     title="مدیریت بدهی"
     lines="full">
</tamin-item>
<tamin-item
    title="برقراری مستمری"
    label="بازنشستگی">
</tamin-item>
<tamin-item
    title="پرتال جامع"
    label="سامانه متمرکز">
</tamin-item>`

  exampleFour = `
<tamin-item
    label="استعلام شماره حساب"
    title="اعلام شماره حساب بانکی"
    lines="none">
</tamin-item>
<tamin-item
    label="اعلام سوابق"
    title="سوابق تلفیقی"
    lines="none">
</tamin-item>`

  exampleFive = `
<tamin-item
    label="کارفرمایان"
    title="خدمات کارفرمایان"
    [detail]="true"
    [button]="true"
    color="light">
</tamin-item>
<tamin-item
    label="بیمه شده"
    title="ویرایش اطلاعات"
    [detail]="true"
    [disabled]="true"
    color="light">
</tamin-item>`

  exampleSix = `
<tamin-item
    label="اطلاعات هویتی"
    title="نام و نام خانوادگی"
    avatarSrc='/assets/avatar/avatar.svg'
    color="primary">
</tamin-item>
<tamin-item
    label="اطلاعات هویتی"
    title="نام و نام خانوادگی"
    avatarSrc='/assets/avatar/avatar.svg'
    avatarSlot="end"
    color="secondary">
</tamin-item>`

  exampleSeven = `
<tamin-item
    label="بیمه اختیاری"
    title="بیمه مشاغل آزاد"
    thumbnailSrc='/assets/img/thumbnail.svg'
    color="warning">
</tamin-item>
<tamin-item
    label="بیمه اختیاری"
    title="بیمه زنان خانه دار"
    thumbnailSrc='/assets/img/thumbnail.svg'
    thumbnailSlot="end">
</tamin-item>`

  exampleEight = `
<tamin-item
    *ngFor="let item of data, let i=index"
    [label]= "item.itemLabel"
    [title]= "item.itemTitle"
    [badgeLabel]= "item.badgeLabel"
    [badgeColor]= "item.badgeColor"
    [badgeSlot]="item.badgeSlot">
</tamin-item>`

  exampleNine = `
<tamin-item
    label="جدید"
    title="نسخه جدید"
    iconName="add"
    iconColor="primary">
</tamin-item>
<tamin-item
    label="سازمان تامین اجتماعی"
    title="شماره شعبه"
    iconName="home-outline"
    iconSlot="end">
</tamin-item>`

  exampleTen = `
<tamin-item
    label="استعلام شماره حساب"
    title="">
</tamin-item>
<tamin-item
    label=""
    title="سوابق تلفیقی">
</tamin-item>`

  tsFistExample = `
  datas: Array<{ [key: string]: string }> = [
    {
      itemTitle: "وضعیت حمایت‌های درمانی",
      itemLabel: "استعلام غیرحضوری",
      itemColor: "primary"
    },
    {
      itemTitle: "شماره پیگیری",
      itemLabel: "تاریخ درخواست",
      itemDirection: "ltr"
    },
    {
      itemTitle: "بیمه شده",
      itemLabel: "نوع کاربری",
      itemColor: "warning"
    }
  ]`

  tsSecondExample = `
  data: Array<{ [key: string]: string }> = [
    {
      itemLabel: "سازمان تامین اجتماعی",
      itemTitle: " شماره شعبه",
      badgeLabel: "4540",
      badgeColor: "primary",
      badgeSlot: 'start'
    },
    {
      itemLabel: "توجه",
      itemTitle: " برچسب جدید",
      badgeLabel: "جدید",
      badgeColor: "success",
      badgeSlot: 'end'
    },
    {
      itemLabel: "ویرایش",
      itemTitle: "نسخه جدید",
      badgeLabel: "ویرایش",
      badgeColor: "warning",
      badgeSlot: 'start'
    }
  ]
  `


  data: Array<{ [key: string]: string }> = [
    {itemLabel: "سازمان تامین اجتماعی", itemTitle: " شماره شعبه", badgeLabel: "4540", badgeColor: "primary", badgeSlot: 'start'},
    {itemLabel: "توجه", itemTitle: " برچسب جدید", badgeLabel: "جدید", badgeColor: "success", badgeSlot: 'end'},
    {itemLabel: "ویرایش", itemTitle: "نسخه جدید", badgeLabel: "ویرایش", badgeColor: "warning", badgeSlot: 'start'}
  ]

  datas: Array<{ [key: string]: string }> = [
    {itemTitle: "وضعیت حمایت‌های درمانی", itemLabel: "استعلام غیرحضوری", itemColor: "primary"},
    {itemTitle: "شماره پیگیری", itemLabel: "تاریخ درخواست", itemDirection: "ltr"},
    {itemTitle: "بیمه شده", itemLabel: "نوع کاربری", itemColor: "warning"}
  ]


  constructor(private _clipboard: Clipboard) {
  }

  ngOnInit() {
  }

  copy(type: string, htmlCode :string, tsCode :string) {
    if(type === 'html') {
      this._clipboard.copy(htmlCode);
    } else {
      this._clipboard.copy(tsCode);
    }
  }

}
