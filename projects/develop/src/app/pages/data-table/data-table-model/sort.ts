export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface SortParam {
  property: string;
  direction: SortDirection;
}

export interface SortData {
  sortParams: SortParam,
  sortTitle: string
}

