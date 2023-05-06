import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DataTableService} from "../../data-table-service/data-table.service";
import {SearchModalData} from "../../data-table-model/search-modal";

@Component({
  selector: 'tamin-data-table-search-modal',
  templateUrl: './data-table-search-modal.page.html',
  styleUrls: ['./data-table-search-modal.page.scss'],

})
export class DataTableSearchModalPage implements OnInit {
  form!: FormGroup;
  @Input() searchModalData!: SearchModalData;


  constructor(public formBuilder: FormBuilder, private dataTableService: DataTableService) {
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = this.formBuilder.group({
      ...this.searchModalData.formGroupData
    });
  }

  resetForm() {
    this.form.reset();
  }

  close() {
    this.dataTableService.dismissModal();
  }

  search() {
    let data = [];
    if (!this.form.valid) {
      return;
    }
    if(this.searchModalData.inputTexts?.length) {
      this.searchModalData.inputTexts.map(i => {
        const property = i.property;
          const value = this.form.get(i.property)?.value;
          const operator = i.operator;
          if (value) {
            data.push({property, value, operator})
          }
      } )
    }
    if(this.searchModalData.selectOptions?.property) {
      const property = this.searchModalData.selectOptions.property;
      const value = this.form.get('option')?.value;
      const operator = this.searchModalData.selectOptions.operator;
      if (value) {
        data.push({property, value, operator})
      }
    }
    this.dataTableService.dismissModal(data, 'cancel');
    this.form.reset();
  }

}
