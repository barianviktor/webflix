import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-item',
  templateUrl: './pagination-item.component.html',
  styleUrls: ['./pagination-item.component.scss'],
})
export class PaginationItemComponent implements OnInit {
  @Input() content?: string | number = '';
  @Input() selected?: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
