import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tamin-more-info',
  templateUrl: './more-info.page.html',
  styleUrls: ['./more-info.page.scss'],
})
export class MoreInfoPage implements OnInit {
  @Input() data!: string

  constructor() { }

  ngOnInit() {
  }



}
