import { Component, OnInit } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  exampleOne= `
<tamin-button
    label="ورود به سامانه"
    color="primary">
</tamin-button>
<tamin-button
    label="ثبت نام"
    color="success">
</tamin-button>
<tamin-button
    label="حذف"
    color="danger">
</tamin-button>
<tamin-button
    label="کارفرمایان"
    color="warning">
</tamin-button>`

  exampleTwo =`
<tamin-button
    label="مستمری بگیران"
    color="primary">
</tamin-button>
<tamin-button
    label="حکم مستمری"
    color="secondary"
    fill="clear">
</tamin-button>
<tamin-button
    label="فیش حقوق"
    color="tertiary"
    fill="outline">
</tamin-button>
<tamin-button
    label="درخواست تسهیلات"
    color="primary"
    fill="solid">
</tamin-button>`

  exampleThree=`
<tamin-button
    label="فعال"
    color="primary">
</tamin-button>
<tamin-button
    label="غیرفعال"
    color="primary"
    [disabled]="true">
</tamin-button>`

  exampleFour=`
<tamin-button
   label="تایید نهایی"
   color="success"
   expand="full" >
</tamin-button>
<tamin-button
    label="حذف"
    color="danger"
    expand="block">
</tamin-button>`

  exampleFive=`
<tamin-button
    label="خدمات سابقه"
    color="light"
    size="large">
</tamin-button>
<tamin-button
    label="خدمات بیمه ای"
    color="primary">
</tamin-button>
<tamin-button
    label="خدمات نام نویسی"
    color="dark"
    size="small">
</tamin-button>`

  exampleSix=`
<tamin-button
    label="افزودن"
    iconName="add"
    iconColor="primary">
</tamin-button>
<tamin-button
    iconName="create-outline"
    iconColor="success"
    iconSlot="icon-only">
</tamin-button>
<tamin-button
    label="حذف"
    color="danger"
    iconName="trash-outline"
    iconSlot="end">
</tamin-button>`


  constructor(private _clipboard: Clipboard) {
  }


  ngOnInit() {
  }

  copy(value: string) {
    this._clipboard.copy(value);
  }

}
