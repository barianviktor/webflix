import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() page: number = 1;
  @Input() total_pages: number = 1;
  @Output() setPage = new EventEmitter<number>();
  paginationItems: number[] = [];
  constructor() {}

  ngOnInit(): void {
    let i = this.page;
    this.paginationItems = [];
    while (i <= this.total_pages && this.paginationItems.length < 10) {
      this.paginationItems.push(i);
      i++;
    }
  }
  onSetPage(page: number) {
    this.setPage.emit(page);
  }
}
