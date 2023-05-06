import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MoreInfoPage} from "./more-info/more-info.page";
import {PopoverController} from "@ionic/angular";
import {Column} from "../data-table-model/column";
import {DataTableService} from "../data-table-service/data-table.service";

@Component({
  selector: 'tamin-data-table-item',
  templateUrl: './data-table-item.page.html',
  styleUrls: ['./data-table-item.page.scss'],
})
export class DataTableItemPage implements OnInit{

  @Input() value: any;
  @Input() color: string | undefined;
  @Input() displayCol: string = 'action';
  @Input () col!: Column;
  @Input() type: string = 'text';
  @Input() readOnly!: boolean;
  // @Input() colData: Column;

  @Input() disabled: boolean = false;
  @Input() actionLabel: string = 'عملیات';
  @Input() actionIconName: string = 'settings-outline';
  @Input() actionColor: string = 'primary';
  @Output() action = new EventEmitter<any>();


  constructor(public popoverCtrl: PopoverController, private service: DataTableService, private dataTableService: DataTableService) {
  }


  async presentPopover(e: Event) {
    await this.service.createPopover(e, MoreInfoPage, this.value)
  }



  ngOnInit(): void {
    // console.log(this.colData)
    // this.service.updateColumn(this.colData)
  }

  calc(value: any): any{
    return this.service.progress(value)
  }

  getDate(date: any): any{
    return this.service.getDate(date)
  }

}
