import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-card',
  templateUrl: './tamin-card.html',
  styleUrls: ['./tamin-card.scss'],
})
export class TaminCard implements OnInit {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() color: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() titleColor: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() disabled: boolean = false;
  @Input() button: boolean = false;
  @Input() showContent: boolean = true;


  constructor() {
  }

  ngOnInit() {
  }

}
