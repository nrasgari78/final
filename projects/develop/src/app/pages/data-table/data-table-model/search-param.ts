export enum SearchOperator {
  EQUAL = 'EQUAL',
  EQ = 'EQ',
  LIKE = 'LIKE',
  NOT = 'NOT',
  GT = 'GT',
  LT = 'LT',
  GTE = 'GTE',
  LTE = 'LTE',
  NEQ = 'NEQ'
}
export class SearchParam {
  property: any;
  value?: any;
  operator?: SearchOperator;
}
