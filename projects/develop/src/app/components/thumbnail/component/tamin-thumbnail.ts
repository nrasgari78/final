import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-thumbnail',
  templateUrl: './tamin-thumbnail.html',
  styleUrls: ['./tamin-thumbnail.scss'],
})
export class TaminThumbnail implements OnInit {
  @Input() src: string | undefined = undefined;
  @Input() slot: string | undefined = undefined; // "start", "end"
  @Input() alt: string | undefined = undefined;


  constructor() {
  }

  ngOnInit() {
  }

}
