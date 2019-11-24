import { Injectable } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { HelperService } from '../shared/services/helper.service';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apiService: ApiService, private helperService: HelperService) { }

  getAllBooks() {
    return this.apiService.get('/books')
      .pipe(map((books: Book[]) => books));
  }

  getAllIsbnValue(books: Book[]): string{
    let result = books.map(book => book.isbn);
    return this.helperService.enchaineString(result);
  }

}
