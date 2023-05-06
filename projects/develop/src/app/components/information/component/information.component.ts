import {Component, Input} from '@angular/core';
import {infoData} from "../information-modal/information-modal"

@Component({
  selector: 'tamin-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() data: infoData[] | undefined | any[];
  @Input() key: any | undefined ;
  @Input() header: string | undefined;
  @Input() color: string | undefined ='primary';
  dataInfo:any[] =[];


  constructor() {}


  ngOnInit() {
     this.data?.forEach((res=>{
       if(this.key)
          res.hasOwnProperty(this.key)?this.dataInfo.push({'description':res[this.key]}):this.dataInfo;
       else
         res.hasOwnProperty('description')?this.dataInfo.push(res):this.dataInfo
    }))
  }

}
