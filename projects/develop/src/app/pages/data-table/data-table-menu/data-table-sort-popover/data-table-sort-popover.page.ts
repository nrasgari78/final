import {Component, Input, OnInit} from '@angular/core';
import {SortData} from "../../data-table-model/sort";
import {DataTableService} from "../../data-table-service/data-table.service";

@Component({
  selector: 'tamin-data-table-sort-popover',
  templateUrl: './data-table-sort-popover.page.html',
  styleUrls: ['./data-table-sort-popover.page.scss'],
})
export class DataTableSortPopoverPage implements OnInit {

  @Input() data!: SortData[];

  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
  }

  async onSort(columnName: string, sortColumnMethod: string) {
    if (this.data?.length) {
        this.data.map(sortParam => {
          if (sortParam.sortParams.property === columnName) {
            this.dataTableService.dismissPopover({property: columnName, direction: sortColumnMethod});
          }
        })
      }
  }

}
