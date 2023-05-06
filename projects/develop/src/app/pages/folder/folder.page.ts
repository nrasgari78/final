import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {selectmodel, selectModel} from "../../components/select-searchable/model/select-model";
import {SortDirection} from "../../provider/rest/tamin-rest.service";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  config!: selectmodel;

  public folder!: string;
  form!: FormGroup;
  value: any
  progress:number=0.05
  constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.config = {...selectModel};
    this.config.sortParam.direction = SortDirection.ASC;
    // this.config.searchParam='مهندسی'
    this.config
    this.form = this.formBuilder.group({
      // title: [["آب شور",'آب بندکار'], Validators.required],
      title: [[''], Validators.required],
      // title: ['000002', Validators.required],
      // title: [["000001","000002"], Validators.required],
      // title: [["#f00","#0f0"], Validators.required],
    })


    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  test(){
    console.log(this.form.value)
  }


  getvalue(event: any) {
console.log(event)

  }

}
