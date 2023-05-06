import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'tamin-segment',
  templateUrl: './tamin-segment.html',
  styleUrls: ['./tamin-segment.scss'],
})
export class TaminSegment implements OnInit {

  @Input() values : any [] | undefined;
  @Input() disabled: boolean = false;
  @Output() changeSegment = new EventEmitter<any>();



  constructor() {
  }

  ngOnInit() {
  }

  changeSegments(value: any) {
    this.changeSegment.emit(value['detail']['value']);
  }


}
