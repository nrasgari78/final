import {Injectable} from "@angular/core";
import {Column} from "../data-table-model/column";
import {SearchModalData} from "../data-table-model/search-modal";
import {SortData, SortParam} from "../data-table-model/sort";
import {Chart} from "../data-table-model/data-chart";
import {Faq} from "../data-table-model/faq";
import {HttpClient, HttpParams} from "@angular/common/http";
import { LoadingController, ModalController, PopoverController } from "@ionic/angular";
import {timeout} from "rxjs/operators";
import {ExportToCsv} from "export-to-csv";
import {SearchOperator, SearchParam} from "../data-table-model/search-param";


export interface DefaultConfig {
  tableTitle: string
  searchableTable: boolean;
  isLoading: boolean,
  button: boolean,
  dataColumn: Column[],
  rowData: any;
  disabled: boolean;
  actionLabel: string;
  actionIconName: string;
  actionColor: string,
  searchModalData: SearchModalData;
  errorMessage: string;
  sortDatas: SortData[] | [];
  faqDatas: Faq[],
  serviceInfo: string,
  csvFile: any;
  chart: Chart;
  showPaging: boolean,
  limit: number,
  filterByProperty: SearchParam,
}


export const DefaultConfig: DefaultConfig = {
  tableTitle: 'سازمان تامین اجتماعی',
  searchableTable: true,
  isLoading: true,
  button: false,
  dataColumn: [{value: 'action', viewValue: 'عملیات '}],
  rowData: [],
  disabled: false,
  actionLabel: 'عملیات',
  actionIconName: 'settings-outline',
  actionColor: 'primary',

  searchModalData: {
    searchModalTitle: 'سازمان تامین اجتماعی',
    inputTexts: [{displayName: '', operator: SearchOperator.EQ, property: ''}],
    selectOptions: {
      data: [{key: '', value: ''}],
      key: '',
      value: '',
      label: '',
      operator: SearchOperator.EQ,
      property: ''
    },
    formGroupData: {'': []},
  },
  errorMessage: '',
  sortDatas: [],
  faqDatas: [],
  serviceInfo: '',
  csvFile: '',
  chart: {
    data: [],
    label: [],
    title: '',
    subtitle: ''
  },
  showPaging: true,
  limit: 10,
  filterByProperty: {property: '', operator: SearchOperator.EQ}
};

@Injectable({
  providedIn: "root",
})
export class DataTableService {
  public static config: DefaultConfig = DefaultConfig;
  isLoading = false;
  modal: any;
  popover: any;


  constructor(
    private http: HttpClient,
    public _popoverCtrl: PopoverController,
    private _loadingController: LoadingController,
    private _modalCtrl: ModalController) {
  }


  protected get(
    url: string,
    pageNo?: any,
    pageSize?: any,
    searchParams?: SearchParam[],
    sortParams?: SortParam[],
    query?: any): Promise<any> {
    let params = new HttpParams();
    if (pageNo && pageSize) {
      params = params.append('page', pageNo);
      params = params.append('start', ((pageNo - 1) * pageSize));
      params = params.append('limit', pageSize);
    }
    if (query) {
      Object.keys(query).forEach((key) => {
        params = params.append(key, query[key]);
      });
    }
    if (searchParams) {
      params = params.append('filter', JSON.stringify(searchParams));
    }
    if (sortParams) {
      params = params.append('sort', JSON.stringify(sortParams));
    }
    return new Promise<any>((resolve, reject) => {

      this.http.get(url, {params}).pipe(timeout(60000))
        .toPromise()
        .then(value => {
          resolve(value);
        })
        .catch(reason => {
          reject(reason);
        });
    });
  }

  getDataTable(url: string, pageNo: string, pageSize: string, querySearchParams?: SearchParam[], querySortParams?: SortParam[], query?: object): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.presentLoader()
      this.get(url, pageNo, pageSize, querySearchParams, querySortParams, query).then((response) => {
        this.dismissLoader();
        resolve(response)
      })
        .catch((error) => {
          this.dismissLoader();
          reject(error)
        });
    });
  }

  async createPopover(e: Event, componentName: any, data: any, side?: any, alignment?: any) {
    this.popover = await this._popoverCtrl.create({
      component: componentName,
      event: e,
      side: side,
      alignment: alignment,
      componentProps: {data: data}
    });
    await this.popover.present();
  }

  dismissPopover(data?: any, role?: string, id?: string) {
    return this._popoverCtrl.dismiss(data, role, id);
  }


  resolvePopover() {
    return this.popover.onDidDismiss();
  }

  progress(value: any) {
    return Number(value) / 100;
  }

  async presentLoader(msg?: any) {
    this.isLoading = true;
    return await this._loadingController.create({
      message: msg ? msg : 'لطفا منتظر بمانید ...',
    }).then(load => {
      load.present().then(() => {
        if (!this.isLoading) {
          load.dismiss().then(() => {
          });
        }
      });
    });
  }


  async dismissLoader() {
    this.isLoading = false;
    return await this._loadingController.dismiss().then((response) => {
    }).catch((err) => {
    });
  }

  async createModal(component: any, data?: { [key: string]: any }, backdrop?: boolean) {
    this.modal = await this._modalCtrl.create({
      component: component,
      componentProps: data,
      backdropDismiss: backdrop ? backdrop : false,
      canDismiss: true
    });
    this.modal.present();
  }

  resolveModal() {
    return this.modal.onDidDismiss();
  }

  dismissModal(data?: any, role?: string, id?: string) {
    return this._modalCtrl.dismiss(data, role, id);
  }

  exportToCSV(data: any) {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'سازمان تامین اجتماعی',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(data);
  }


  getDate(date: any): string {
    const value = String(date)
    if (value.length === 8) {
      return value.slice(0, 4) + '/' + value.slice(-4, -2) + '/' + value.slice(-2);
    } else {
      return new Date(date).toLocaleDateString('fa-IR-u-nu-latn', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }
  }


}
