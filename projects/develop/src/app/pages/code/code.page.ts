import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  @Input() htmlCode : any;
  @Input() tsCode : any;
  @Output() copyCode = new EventEmitter;
  changeName: boolean = true;
  isHtml: boolean = true;




  constructor() { }

  ngOnInit() {
  }

  copy(value: any) {
    this.copyCode.next(value);
    this.changeName = false;
    setTimeout(() => {this.changeName = true;}, 1500)
  }

}
