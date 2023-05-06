import {Component} from '@angular/core';
import {NavParams} from "@ionic/angular";
import {TaminBaseService} from "../../../../provider/base/base.service";
import {SearchOperator, SearchParam} from "../../../../provider/rest/tamin-rest.service";
import {TaminRestService} from "../../../../provider/rest/tamin-rest.service";

@Component({
  selector: 'tamin-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPage {
  dataList: any[] = [];
  queryText = '';
  url: string = '';
  fieldCode: string = '';
  fieldDesc: string = '';
  searchParam: string = '';
  total_list: number = 1;
  pagenumber = 1;
  offset: number = 1;
  allList: any[] = [];
  sortparam: any;
  multiSelect?: boolean;
  selectedItems: any[] = [];
  valueEdite: string[] = [];
  confirmChek: boolean = true;
  data: any;

  constructor(public navParams: NavParams, private baseService: TaminBaseService, private restService: TaminRestService) {
  }

  ngOnInit() {
    this.url = this.navParams.get('url');
    ;this.fieldCode = this.navParams.get('fieldcode');
    this.fieldDesc = this.navParams.get('fielddesc');
    this.searchParam = this.navParams.get('searchParam');
    this.sortparam = this.navParams.get('sortparam');
    this.multiSelect = this.navParams.get('multiselect');
    this.valueEdite = this.navParams.get('valueedite');
    this.data = this.navParams.get('data');
    this.selectedItems.length > 0 ? this.confirmChek = false : this.confirmChek = true;
    this.mainData('', this.searchParam ? this.searchParam : '');
  }

  mainData(data: any, text: any) {

    this.pagenumber = data.currentPage ? data.currentPage : '1';
    this.offset = data.offset ? data.offset : 1;
    this.dataList = [];
    const searchParams: Array<SearchParam> = [];
    searchParams.push({property: this.fieldDesc, value: `*${text}*`, operator: SearchOperator.LIKE});


    this.baseService.presentLoader();
    if (this.data.length === 0) {
      this.restService.getPage(this.url, this.pagenumber, 10, searchParams, [this.sortparam]).then((value) => {
        this.baseService.dismissLoader();
        this.allList = value.data.list;
        this.total_list = value.data.total;
        if (this.total_list == 0) {
          this.baseService.showAlert('اطلاعاتی برای نمایش وجود ندارد.');
        }
        for (let i = 0; i < value.data.list.length; i++) {
          this.dataList.push({
            'code': value.data.list[i][this.fieldCode],
            'description': value.data.list[i][this.fieldDesc]
          })

          if (this.valueEdite && this.multiSelect) {
            this.valueEdite.forEach(res => {
              if (res === value.data.list[i][this.fieldCode]) {
                const sh = this.selectedItems.find(itemselected => itemselected.jobCode === res)
                if (!sh) {
                  this.selectedItems.push(value.data.list[i]);
                  this.confirmChek = false;
                }
              }
            });
          }
        }
      })
        .catch((reason) => {
          if (reason.status == 500) {
          }
        });
    }
    if (this.data.length > 0) {
      this.baseService.dismissLoader();
      this.total_list = this.data.length;
      this.allList = this.data;
      if (this.total_list == 0) {
        this.baseService.showAlert('اطلاعاتی برای نمایش وجود ندارد.');
      }
      this.data.forEach((res: any) => {
        this.dataList.push({
          'code': res[this.fieldCode],
          'description': res[this.fieldDesc]
        })
        if (this.valueEdite && this.multiSelect) {
          this.valueEdite.forEach(item => {
            if (item === res[this.fieldCode]) {
              const sh = this.selectedItems.find((itemselected: any) => itemselected.jobCode === item)
              if (!sh) {
                this.selectedItems.push(res);
                this.confirmChek = false;
              }
            }
          });
        }
      });
    }
  }

  close() {
    this.baseService.dismissModal();
  }

  select(item: any) {
    setTimeout(() => {
      const chosen = this.allList.filter(sel => item.code === sel[this.fieldCode]);
      this.baseService.dismissModal(chosen);
    }, 100);

  }

  selectChekbox(event: any) {
    const item = event.detail.value;
    if (event.detail.checked) {
      const sh = this.allList.find(r => item === r[this.fieldCode]);
      this.selectedItems.push(sh);
    } else {
      const rm = this.selectedItems.find(res => res[this.fieldCode] === item);
      if (rm)
        this.selectedItems.splice(this.selectedItems.indexOf(rm), 1);
    }
    this.selectedItems.length > 0 ? this.confirmChek = false : this.confirmChek = true;
  }

  confirm() {
    setTimeout(() => {
      this.baseService.dismissModal(this.selectedItems);
    }, 100);
  }

  checkedMulti(item: any) {
    return this.selectedItems.some(res => res[this.fieldCode] === item);
  }
}

