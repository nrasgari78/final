import {Component, Input, OnInit} from '@angular/core';
import {DataTableSearchModalPage} from "./data-table-search-modal/data-table-search-modal.page";
import {ModalController, PopoverController} from "@ionic/angular";
import {DataTableSortPopoverPage} from "./data-table-sort-popover/data-table-sort-popover.page";
import {DataTableFaqPage} from "./data-table-faq/data-table-faq.page";
import {TaminBaseService} from "../../../provider/base/base.service";
import {ChartModalPage} from "./chart-modal/chart-modal.page";
import {DataTableService, DefaultConfig} from "../data-table-service/data-table.service";

@Component({
  selector: 'tamin-data-table-base',
  templateUrl: './data-table-menu.page.html',
  styleUrls: ['./data-table-menu.page.scss'],
})
export class DataTableMenuPage implements OnInit {

  constructor(private popoverCtrl: PopoverController,
              private modalCtrl: ModalController,
              private dataTableService: DataTableService,
              private baseService: TaminBaseService  ) { }
  @Input() data!: DefaultConfig;


  ngOnInit() {}


  openSearchModal() {
    this.dataTableService.createModal(DataTableSearchModalPage, { searchModalData: this.data.searchModalData} ).then(() => {
      this.dataTableService.resolveModal().then((data: any) => {
        if (!!data.data) {
          this.dataTableService.dismissPopover({modalData: data});
        }
      });
    })
  }

  async openFaqModal() {
    await this.dataTableService.createModal(DataTableFaqPage, {faqDatas: this.data.faqDatas})
  }

  openSortPopover(e: Event) {
    this.dataTableService.createPopover(e, DataTableSortPopoverPage, this.data.sortDatas, "right", "center").then(() => {
      this.dataTableService.resolvePopover().then((value: any) =>
        {this.dataTableService.dismissPopover({sortData: value})
        }
      )
    })
  }

  showServiceInfo() {
    this.baseService.showAlert(this.data.serviceInfo)
  }

  download(data: any) {
    this.dataTableService.exportToCSV(data)
  }

  openChart() {
   this.dataTableService.createModal(ChartModalPage, {chart: this.data.chart})
  }

}
