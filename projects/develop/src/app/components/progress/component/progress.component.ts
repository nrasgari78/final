import {Component, ViewEncapsulation} from '@angular/core';
import {NavParams} from "@ionic/angular";
;import {TaminRestServices} from "../../../provider/rest/tamin-rest.service-observable";


@Component({
  selector: 'tamin-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent {
  progress = 0;
  count: number = 0;
  len: number = 0;
  show = true;

  constructor(public navParams: NavParams, private restServices: TaminRestServices) {
  }

  ngOnInit() {
    this.len = this.navParams.get('length');

    this.restServices.counter.subscribe(value => {
      this.progress = value + 1;
    })
  }
  rightClass(){
    return ((this.progress/this.len)*100).toString()+'%'
  }
  calculate(){
    return Math.round((this.progress/this.len)*100)
  }
}

