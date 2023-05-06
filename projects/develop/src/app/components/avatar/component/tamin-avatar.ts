import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-avatar',
  templateUrl: './tamin-avatar.html',
  styleUrls: ['./tamin-avatar.scss'],
})
export class TaminAvatar implements OnInit {
  @Input() src: string | undefined;
  @Input() alt = '';
  @Input() slot: string | undefined; // "start", "end"


  constructor() {
  }

  ngOnInit() {
  }

}
