import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable, of } from "rxjs";


@Component({
  selector: 'tamin-pagination',
  templateUrl: './tamin-pagination.html',
  styleUrls: ['./tamin-pagination.scss'],
})
export class TaminPagination implements OnInit {

  @Input() offset: number = 1; // current offset
  @Input() limit!: number; // record per page
  @Input() size!: number; // total records
  @Input() range: number = 3;
  @Input() visibleRangeLength = 5;
  math = Math;




  @Output() changePage: EventEmitter<any>;
  currentPage: number = 1;
  totalPages!: number;
  pages!: Observable<number[]>;

  constructor() {
    this.changePage = new EventEmitter<any>();
  }

  ngOnInit() {
/*     this.getPages(this.offset, this.limit, this.size );
    this.changePage.emit({offset: 0, currentPage: '1'}); */
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

  getPages(offset: number, limit: number, size: number, ) {
    this.currentPage = this.getCurrentPage(offset, limit);
    this.totalPages = this.getTotalPages(limit, size);
    this.updateVisiblePages()
  }

  private updateVisiblePages(): void {
    const length = Math.min(this.totalPages,this.visibleRangeLength);
    const startIndex = Math.max(
      Math.min(
        this.currentPage - Math.ceil(length / 2),
        this.totalPages - length
      ),
      0
    );

    this.pages = of(Array.from(
      new Array(length).keys(),
      (item) => item+ startIndex  + 1
    ));
  }


  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  selectPage(page: number, event: any) {
    event.preventDefault();
    if (this.isValidPageNumber(page, this.totalPages)) {
      this.changePage.emit({offset: (page - 1) * this.limit, currentPage: page.toString(), totalPages: this.totalPages});
    }
  }

  cancelEvent(event: any) {
    event.preventDefault();
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

}
