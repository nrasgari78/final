import {SearchOperator} from "./search-param";

export interface SearchModalData {
  searchModalTitle: string;
  inputTexts?: InputText[];
  selectOptions?: selectOption ;
  formGroupData: {[key: string] : any[]}
}

export interface InputText {
  displayName: string;
  property: string;
  operator: SearchOperator;
}

export interface selectOption{
  property: string;
  data: [{[key: string]: string}];
  key: string;
  value: string;
  label: string;
  operator: SearchOperator;
}

