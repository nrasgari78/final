import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaminBaseService} from "../../provider/base/base.service";
import {TaminRestService} from "../../provider/rest/tamin-rest.service";
import {SortDirection} from "../data-table/data-table-model/sort";
import {DataTableService, DefaultConfig} from "../data-table/data-table-service/data-table.service";
import {LoadDataParameters} from "../data-table/data-table-model/load-data-parameters";
import {SearchOperator} from "../data-table/data-table-model/search-param";
import {Clipboard} from "@angular/cdk/clipboard";


@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  configuration!: DefaultConfig;
  dataColumn= [{value: 'subType.typeDesc', viewValue: 'عنوان'},{value: 'date', viewValue: 'تاریخ دریافت'}, {value: 'seen', viewValue: 'وضعیت'}, {value: 'type.typeDesc', viewValue: 'موضوع'},  {value: 'index', viewValue: 'کد '}, {value: 'action', viewValue: 'عملیات '}];
  faqDatas = [{ question: 'این سامانه چیست؟' , answer : 'پرتال جامع اطلاع رسانی تامین اجتماعی'}, {question: 'چگونه از آن استفاده کنم؟' , answer: 'از طریق سامانه ثبت نام نمایید'} ];

  //my request
  config!: DefaultConfig;
  requestDataColumn= [{value: 'refCode', viewValue: 'شماره پیگیری'},{value: 'title', viewValue: 'عنوان درخواست'}, {value: 'id', viewValue: 'شناسه'} , {value: 'lastModificationTime', viewValue: 'تاریخ ویرایش درخواست'}, {value: 'status.requestDesc', viewValue: 'وضعیت درخواست'}];
  requestSortDatas = [{sortParams: {property: 'refCode', direction: SortDirection.DESC}, sortTitle: 'مرتب سازی شماره پیگیری'}];

  constructor(private _clipboard: Clipboard, private http: HttpClient, private baseService: TaminBaseService, private restService: TaminRestService, private dataTableService: DataTableService) {}

  ngOnInit() {
    this.configuration = {...DefaultConfig};
    this.configuration.tableTitle = 'صندوق شخصی من';
    this.configuration.dataColumn= this.dataColumn;
    this.configuration.searchModalData = {
      searchModalTitle : 'جستجوی صندوق شخصی',
      formGroupData : { option: ['']},
    }
    this.configuration.faqDatas = this.faqDatas;
    this.configuration.chart = {data:  [50, 60, 37, 60, 40, 80], label: ['50', '60', '37', '60', '40', 'test'], title: 'سازمان تامین اجتماعی' }
    this.configuration.serviceInfo = ' متقاضیانی که سن آنان در تاریخ انعقاد قرارداد بین 18 تا 50 سال تمام باشد در صورت تمایل می توانند با رعایت سایر شرایط مقرر نسبت به انعقاد قرارداد بیمه صاحبان حرف و مشاغل آزاد اقدام نمایند.';
    this.setSelectOptionsData();

    //my request
    this.config = {...DefaultConfig};
    this.config.tableTitle = 'درخواست های من';
    this.config.dataColumn = this.requestDataColumn;
    this.config.sortDatas = this.requestSortDatas;
    this.config.button = true;
    this.config.searchModalData = {
      searchModalTitle : 'جستجوی درخواست های من',
      inputTexts : [{displayName: 'شماره پیگیری', property: 'refCode', operator: SearchOperator.EQ}],
      formGroupData : {refCode: ['']},
    }
    this.config.filterByProperty = {property: 'refCode', operator: SearchOperator.EQ}
  }

  loadData(event: LoadDataParameters) {
    this.dataTableService.getDataTable('https://eservices.tamin.ir/api/announcement/to-user', event.page, event.size, event.searchParam, event.sortParam).then((value) => {
      this.configuration.rowData = value;
      this.configuration.csvFile = value.data.list;
    }).catch(() => {
        this.configuration.errorMessage = 'سرویس شما با خطا روبرو شده است';
      }
    )
  }

  loadDataRequest(event: LoadDataParameters) {
    this.requestSortDatas.map(i => event.sortParam.push(i.sortParams));

      event.searchParam = [{"value":"03","operator":"EQUAL","property":"operation"}, ...event.searchParam]
    this.dataTableService.getDataTable('https://eservices.tamin.ir/api/requests', event.page, event.size, event.searchParam, event.sortParam).then((value) => {
      this.config.rowData = value;
      this.config.csvFile = value.data.list;
    }).catch(() => {
        this.config.errorMessage = 'سرویس شما با خطا روبرو شده است';
      }
    )

  }

  setSelectOptionsData() {
    this.restService.getPage('https://eservices.tamin.ir/api/announcement/type', 1, 20, [], []).then(value=> {
      this.configuration.searchModalData.selectOptions = { data: value.data.list , value: 'typeCode', key: 'typeDesc', label: "نام سیستم" , operator: SearchOperator.EQ, property: 'type.typeCode'};
    })
  }


  selectedItem(item: any) {
    const date = this.dataTableService.getDate(item.receiveDate);
    const message = `درخواست شما با شماره پیگیری  ${item.id}
    در تاریخ ${date } ثبت گردید
     `
   this.baseService.showAlert(message)
  }

  selectedItemBtn(item: any) {
    const name = item.createByName;
    const title = item.title;
    const date = this.dataTableService.getDate(item.creationTime);

    const message = `${name} عزیز
    ${title} شما
        در تاریخ ${date } ثبت گردید
     `
    this.baseService.showAlert(message)
  }

  setColor(item: any) {
    return item.status?.requestCode === '0019' ? 'danger' : item.status?.requestCode === '0026' ? 'warning' : item.status?.requestCode === '0002' ? 'dark' : 'success'
  }

  //app-code
  htmlCode = `
  <tamin-data-table (loadData)="loadData($event)"
                    [configuration]="configuration"
                    (itemClicked)="selectedItem($event)">
    <tamin-data-table-row *taminRow="let item; let colName=colName; let rowIndex =rowIndex ">
      <tamin-data-table-item type="text" [col]="colName" [value]="item.subType.typeDesc"
                             [displayCol]="'subType.typeDesc'">
      </tamin-data-table-item>
      <tamin-data-table-item [col]="colName" type="popover" [value]="item.type.typeDesc"
                             [displayCol]="'type.typeDesc'">
      </tamin-data-table-item>
      <tamin-data-table-item [col]="colName" type="icon" [displayCol]="'seen'"
                             [value]="item.seen ? 'checkmark-done-outline' : 'checkmark-outline'"
                             [color]="item.seen ? 'success' : 'danger'">
      </tamin-data-table-item>
    </tamin-data-table-row>
  </tamin-data-table>
  `

  tsCode = `
    configuration: DefaultConfig;

    ngOnInit() {
    this.configuration = {...DefaultConfig};
    this.configuration.tableTitle = 'صندوق شخصی من';
    this.configuration.dataColumn= [{value: 'subType.typeDesc', viewValue: 'عنوان'}, {value: 'type.typeDesc', viewValue: 'موضوع'}, {value: 'seen', viewValue: 'وضعیت'},];
   }

   loadData(event: LoadDataParameters) {
    this.dataTableService.getDataTable('https://eservices.tamin.ir/api/announcement/to-user', event.page, event.size, event.searchParam, event.sortParam)
    .then((value) => {
      this.configuration.rowData = value;
    }).catch(() => {
        this.configuration.errorMessage = 'سرویس شما با خطا روبرو شده است';
      })
  }
  `

  copy(type: string, htmlCode: string, tsCode: string) {
    if(type === 'html') {
      this._clipboard.copy(htmlCode);
    } else {
      this._clipboard.copy(tsCode);
    }
  }
}
