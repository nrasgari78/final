import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import {RowDirective} from "./row.directive";
import {SortDirection} from "./data-table-model/sort";
import {DataTableMenuPage} from "./data-table-menu/data-table-menu.page";
import {DataTableService, DefaultConfig} from "./data-table-service/data-table.service";
import {SearchParam} from "./data-table-model/search-param";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'tamin-data-table',
  templateUrl: './data-table.page.html',
  styleUrls: ['./data-table.page.scss'],
})

export class DataTablePage implements OnInit {
  @ContentChild(RowDirective, {read: TemplateRef}) listViewTemplate: any;
  config!: DefaultConfig;
  @Input() configuration!: DefaultConfig;


  offset: number = 0;
  currentPage: string = '1';
  showFunnel: boolean = false;
  searchText: any;
  propertyName: string = '';
  direction: string = '';
  sortParams!: [];
  @Input() visibleRangeLength: number = 5;

  @Output() moreData = new EventEmitter();
  @Output() itemClicked = new EventEmitter();
  @Output() loadData = new EventEmitter();

  constructor(private dataTableService: DataTableService, private http: HttpClient) {
  }

  ngOnInit() {
    if (this.configuration) {
      this.config = this.configuration;
    } else {
      this.config = DataTableService.config;
    }
    this.loadData.emit({page: '1', size: this.config.limit.toString(), searchParam: [], sortParam: []})
  }


  openMenuPopover(e: Event) {
    this.dataTableService.createPopover(e, DataTableMenuPage, this.config).then(() => {
      this.dataTableService.resolvePopover().then((data: any) => {
        if (!!data.data) {
          if (data.data.hasOwnProperty('modalData')) {
            const searchParams = data.data.modalData.data;
            this.loadData.emit({
              page: this.currentPage,
              size: this.config.limit.toString(),
              searchParam: searchParams,
              sortParam: []
            });
          }
          if (data.data.hasOwnProperty('sortData')) {
            this.onSort(data.data.sortData.data);
          }
        }
      })
    })
  }

  reset() {
      this.currentPage = '1';
      this.offset = 1;
      this.loadData.emit({page: this.currentPage, size: this.config.limit.toString(), searchParam: [], sortParam: []});
  }


  onSort(sortParams: any) {
    switch (sortParams && sortParams.direction) {
      case 'ASC':
        this.config.sortDatas.map(sortParam => {
          if (sortParam.sortParams.property === sortParams.property) {
            sortParam.sortParams.direction = SortDirection.DESC;
            this.loadData.emit({
              page: this.currentPage,
              size: this.config.limit,
              searchParam: [],
              sortParam: [sortParams]
            });
            this.propertyName = sortParams.property;
            this.direction = sortParams.direction;
          }
        })
        break;
      case 'DESC':
        this.config.sortDatas.map(sortParam => {
          if (sortParam.sortParams.property === sortParams.property) {
            sortParam.sortParams.direction = SortDirection.ASC;
            this.loadData.emit({
              page: this.currentPage,
              size: this.config.limit,
              searchParam: [],
              sortParam: [sortParams]
            });
            this.propertyName = sortParams.property;
            this.direction = sortParams.direction;
          }
        })
    }
  }

  loadPage(data: any) {
    this.currentPage = data.currentPage;
    this.loadData.emit({page: data.currentPage, size: this.config.limit.toString(), searchParam: [], sortParam: []});
    this.offset = data.offset;
  }

  // search(event: any) {
  //   let searchParams: SearchParam[] = [];
  //   const value = event.detail.value;
  //   if (value.length) {
  //     searchParams.push({
  //       property: this.config.filterByProperty.property,
  //       value: `*${value}*`,
  //       operator: this.config.filterByProperty.operator
  //     });
  //   } else {
  //     searchParams = [];
  //   }
  //   this.loadData.emit({page: this.currentPage, size: this.config.limit, searchParam: searchParams, sortParam: []});
  // }

  search(event: any) {
    let searchParams: SearchParam[] = [];
    const value = event.detail.value;
    if (value.length) {
      searchParams.push({
        property: this.config.filterByProperty.property,
        value: value,
        operator: this.config.filterByProperty.operator
      });
    } else {
      searchParams = [];
    }
    this.loadData.emit({page: this.currentPage.toString(), size: this.config.limit.toString(), searchParam: searchParams, sortParam: []});
  }







}
