import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {filter, Observable, range, tap, toArray} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'tamin-data-table-pagination',
  templateUrl: './data-table-pagination.page.html',
  styleUrls: ['./data-table-pagination.page.scss'],
})
export class DataTablePaginationPage implements OnInit {

  @Input() offset!: number; // current offset
  @Input() limit!: number; // record per page
  @Input() size!: number; // total records
  @Input() range: number = 3;


  @Output() loadData: EventEmitter<any>;
  currentPage!: number;
  totalPages!: number;
  pages!: Observable<number[]>;

  constructor() {
    this.loadData = new EventEmitter<any>()
  }

  ngOnInit() {
    this.getPages(this.offset, this.limit, this.size);
  }

  ngOnChanges() {
    this.getPages(this.offset, this.limit, this.size);
  }


  getCurrentPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  getTotalPages(limit: number, size: number): number {
    return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
  }

  getPages(offset: number, limit: number, size: number) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.pages = range(-this.range, this.range * 2 +1).pipe(
      map(offset => this.currentPage + offset)
      , filter(page => this.isValidPageNumber(page, this.totalPages))
      , toArray());
  }


  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number, event: any) {
    event.preventDefault();
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.loadData.emit((page - 1) * this.limit);
    }
  }

  cancelEvent(event: any) {
    event.preventDefault();
  }

}
