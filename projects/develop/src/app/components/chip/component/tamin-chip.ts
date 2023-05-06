import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-chip',
  templateUrl: './tamin-chip.html',
  styleUrls: ['./tamin-chip.scss'],
})
export class TaminChip implements OnInit {
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
  @Input() iconName: string | undefined;
  @Input() dir: string | undefined; //"ltr", "rtl"
  @Input() color: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() avatarSrc: string | undefined;
  @Input() avatarAlt = '';
  @Input() label: string | undefined;


  constructor() {
  }

  ngOnInit() {
  }

}
