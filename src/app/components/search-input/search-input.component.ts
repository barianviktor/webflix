import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ISearchForm } from 'src/app/util/forms/interfaces/searchForm.interface';
import { SearchForm } from 'src/app/util/forms/models/SearchForm';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() currentQuery: string = '';
  @Output() searchEmitter = new EventEmitter<string>();
  searchForm: FormGroup<ISearchForm> = new SearchForm();
  searchSub: Subscription;
  constructor() {
    this.searchSub = this.query.valueChanges.subscribe(
      (searchParam: string) => {
        if (searchParam.length >= 3) {
          this.searchEmitter.emit(searchParam);
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
  get query(): FormControl {
    return this.searchForm.get('query') as FormControl;
  }
  ngOnInit(): void {
    this.query.patchValue(this.currentQuery);
  }
}
