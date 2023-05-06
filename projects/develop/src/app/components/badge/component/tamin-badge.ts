import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-badge',
  templateUrl: './tamin-badge.html',
  styleUrls: ['./tamin-badge.scss'],
})
export class TaminBadge implements OnInit {
  @Input() label: string | undefined;
  @Input() color: string | undefined; // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() slot: string = "start";


  constructor() {
  }

  ngOnInit() {
  }

}
