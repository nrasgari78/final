import {Component, EventEmitter, Injector, Input, OnInit, Optional, Output, Self} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NgControl,} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {ModalPage} from "../modal-page/component/modal-page.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {selectModel, selectmodel} from "../model/select-model";
import {TaminRestService} from "../../../provider/rest/tamin-rest.service";

@Component({
  selector: 'tamin-select-searchable',
  templateUrl: './select-searchable.component.html',
  styleUrls: ['./select-searchable.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectSearchable,
    multi: true,
  }
  ]
})
export class SelectSearchable implements OnInit, ControlValueAccessor {
  selected: any[] = [];
  value: any;
  config!: selectmodel;
  @Output() valueList = new EventEmitter<any>();
  @Input() configuration!: selectmodel;
  @Input() data!: any;

  private errorMessages = new Map<string, () => string>();
  ngControl!: NgControl;

  constructor(@Self() @Optional() private _injector: Injector, public formBuilder: FormBuilder, private modalCtrl: ModalController, private restService: TaminRestService) {
    this.errorMessages.set('required', () => ` ورود اطلاعات ضروری است`);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange: any = () => {
  };
  onTouch: any = () => {
  };


  ngOnInit() {

    if (this.configuration) {
      this.config = this.configuration;
    } else {
      this.config = selectModel;
    }
    this.ngControl = this._injector.get(NgControl);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      canDismiss: true,
      componentProps: {
        url: this.config.url, fielddesc: this.config.fieldDes,
        fieldcode: this.config.fieldCode, searchParam: this.config.searchParam,
        sortparam: this.config.sortParam, multiselect: this.config.multiSelect,
        valueedite: this.value, data: this.config.data
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data !== undefined) {
        if (this.config.multiSelect) {
          this.valueList.emit(data.data);
          const values: any[] = [];
          const selected: any[] = [];
          data.data.forEach((item: any) => {
            values.push(item[this.config.fieldCode]);
            selected.push(item[this.config.fieldDes]);
            this.value = values;
            this.selected = selected;
            this.onChange(values);
            this.onTouch();
          })
        } else {
          this.valueList.emit(data.data[0]);
          this.value = data.data[0][this.config.fieldCode];
          this.selected = data.data[0][this.config.fieldDes];
          this.onChange(data.data[0][this.config.fieldCode]);
          this.onTouch();

        }
      }
    });
    await modal.present();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(obj: string): void {
    this.value = obj;
    this.mainData();

  }

  mainData() {
    let selected: any[] = []
    this.restService.getPage(this.config.url, 1, 10, [], [this.config.sortParam]).then((value) => {
      for (let i = 0; i < value.data.list.length; i++) {
        if (this.config.multiSelect) {
          const sh = this.value.find((res: any) => res === value.data.list[i][this.config.fieldCode]);
          if (sh) {
            selected.push(value.data.list[i][this.config.fieldDes]);
            this.selected = selected;
          }
        } else {
          if (this.value === value.data.list[i][this.config.fieldCode])
            this.selected = value.data.list[i][this.config.fieldDes];
        }
      }
    })
  }
}
