import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-item',
  templateUrl: './tamin-item.html',
  styleUrls: ['./tamin-item.scss'],
})
export class TaminItem implements OnInit {
  @Input() dir= 'rtl' //'rtl' | 'ltr';
  @Input() fill: "outline" | undefined ; // "outline"｜ undefined
  @Input() shape: string | undefined ; // "round"
  @Input() type: string | undefined; // "button" ｜ "reset" ｜ "submit"
  @Input() lines: string | undefined;  // "full" ｜ "inset" ｜ "none" ｜ undefined
  @Input() detailIcon: string | undefined ;
  @Input() disabled: boolean = false;
  @Input() detail: boolean = false;
  @Input() button: boolean = false;
  @Input() color: string | undefined;  //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"

  @Input() avatarSrc: string | undefined;
  @Input() avatarAlt = '';
  @Input() avatarSlot = "start"  ;  // "start", "end"

  @Input() thumbnailSrc: string | undefined ;
  @Input() thumbnailSlot = "start"  ;  // "start", "end"


  @Input() label: string | undefined;
  @Input() title: string | undefined;
  @Input() labelColor: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"

  @Input() iconName: string | undefined ;
  @Input() iconSize: string | undefined ; //'small' | 'large'
  @Input() iconColor: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() iconSlot = "start" //"start", "end", "icon-only"

  @Input() badgeLabel: string | undefined ;
  @Input() badgeColor: string | undefined ; // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() badgeSlot : string ="start" //"start", "end",

  constructor() {
  }

  ngOnInit() {
  }

}
