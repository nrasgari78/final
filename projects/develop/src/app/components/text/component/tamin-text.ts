import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-text',
  templateUrl: './tamin-text.html',
  styleUrls: ['./tamin-text.scss'],
})
export class TaminText implements OnInit {
  @Input() color: string | undefined; // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  constructor() { }

  ngOnInit() {
  }

}
