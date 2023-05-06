import {Component, Input, OnInit} from '@angular/core';
import {Faq} from "../../data-table-model/faq";
import {DataTableService} from "../../data-table-service/data-table.service";

@Component({
  selector: 'tamin-data-table-faq',
  templateUrl: './data-table-faq.page.html',
  styleUrls: ['./data-table-faq.page.scss'],
})
export class DataTableFaqPage implements OnInit {
  @Input() faqDatas!: Faq[];

  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
  }


  close() {
    this.dataTableService.dismissModal();
  }

}
