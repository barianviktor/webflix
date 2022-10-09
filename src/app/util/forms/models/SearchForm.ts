import { FormControl, FormGroup } from '@angular/forms';
import { ISearchForm } from '../interfaces/searchForm.interface';

export class SearchForm extends FormGroup<ISearchForm> {
  constructor() {
    super({
      query: new FormControl('', { nonNullable: true }),
    });
  }
}
