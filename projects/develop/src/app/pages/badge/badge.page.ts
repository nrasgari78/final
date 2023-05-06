import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";


@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
  exampleOne = `
<tamin-badge
    label="بیمه شده"
    color="primary">
</tamin-badge>
<tamin-badge
    label="جامعه متخصصان"
    color="light">
</tamin-badge>
<tamin-badge
    label="اخطار"
    color="warning" >
</tamin-badge>
<tamin-badge
    label="اتمام"
    color="dark">
</tamin-badge>
`;

  exampleTwo = `
<tamin-item
   label="خدمات کارفرما"
   title="شماره کارگاه"
   badgeLabel="3070"
   badgeColor="danger">
</tamin-item>
`;

  exampleThree = `
<tamin-card
    title="سامانه خدمات غیرحضوری"
    subtitle="این سامانه چیست؟">
    <p card-content>.با توجه به گسترش خدمات غیر حضوری های موجود و همچنین خدمات غیر حضوری جدید در خود جای داده است.</p>
    <tamin-item
        label="پرتال جامع"
        title="سامانه متمرکز"
        badgeLabel="3070"
        badgeColor="secondary"
        badgeSlot="end">
    </tamin-item>
</tamin-card>
`;

  exampleFour = `
<tamin-item
    *ngFor="let item of data, let i=index"
    [label]= item.itemLabel
    [title]=item.itemTitle
    [badgeLabel]=item.badgeLabel
    [badgeColor]=item.badgeColor
    badgeSlot="end">
</tamin-item>
`;



  data: Array<{ [key: string]: string }> = [
    {itemLabel: "سازمان تامین اجتماعی", itemTitle: " شماره شعبه", badgeLabel: "4540", badgeColor: "primary"},
    {itemLabel: "توجه", itemTitle: " برچسب جدید", badgeLabel: "جدید", badgeColor: "success"},
    {itemLabel: "ویرایش", itemTitle: "نسخه جدید", badgeLabel: "ویرایش", badgeColor: "warning"}
  ]


  constructor(private _clipboard: Clipboard) {
  }

  ngOnInit() {
  }

  copy(value: string) {
    this._clipboard.copy(value);
  }


}
