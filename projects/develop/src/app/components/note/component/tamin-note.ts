import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-note',
  templateUrl: './tamin-note.html',
  styleUrls: ['./tamin-note.scss'],
})
export class TaminNote implements OnInit {
  @Input() color: string | undefined; //"primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"
  @Input() label: string | undefined;
  @Input() slot: string | undefined; // "start", "end"


  constructor() {
  }

  ngOnInit() {
  }

}
