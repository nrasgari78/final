import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-button',
  templateUrl: './tamin-button.html',
  styleUrls: ['./tamin-button.scss'],
})
export class TaminButton implements OnInit {
  @Input() disabled: boolean = false;
  @Input() expand: string | undefined; //"block" ｜ "full" ｜ undefined
  @Input() fill: string | undefined; //"clear" ｜ "default" ｜ "outline" ｜ "solid" ｜ undefined
  @Input() size: string | undefined; //"default" ｜ "large" ｜ "small" ｜ undefined
  @Input() color: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() label: string | undefined;


  @Input() iconSize: string | undefined;//'small' | 'large'
  @Input() iconColor: string | undefined;  //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() iconName: string | undefined;
  @Input() iconSlot = "start" // "start", "end", "icon-only"
  constructor() { }

  ngOnInit() {
  }

}
