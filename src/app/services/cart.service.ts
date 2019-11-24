import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { HelperService } from '../shared/services/helper.service';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { AppConfig } from '../core/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private currentCartSubject = new BehaviorSubject<Book[]>([]);

  constructor(private storageService: LocalStorageService, private apiService: ApiService, private helperService: HelperService) { 
    this.currentCartSubject = new BehaviorSubject<Book[]>(JSON.parse(localStorage.getItem(AppConfig.cartStoreName)));
  }

  public get cartBooks(): Book[] {
    return this.currentCartSubject.getValue();
  }

  addDataToCart(book: Book): void {
    if (!this.isExistInCart(book.isbn)) {
      this.currentCartSubject.next(this.currentCartSubject.getValue().concat([book]));
      this.storageService.store(AppConfig.cartStoreName, this.currentCartSubject.getValue());
    }
  }

  removeFromCart(bookData: Book) {
    let listBooks: Book[] = this.currentCartSubject.getValue();
    listBooks.forEach((book: Book, index) => {
      if(book.isbn === bookData.isbn) { listBooks.splice(index, 1); }
    });
    this.currentCartSubject.next(listBooks);
    this.storageService.store(AppConfig.cartStoreName, this.currentCartSubject.getValue());
  }

  isExistInCart(isbn: string): boolean {
    return this.currentCartSubject.getValue().some((bookData: Book) => bookData.isbn === isbn);
  }

  isNotEmpty(): boolean {
    return this.cartBooks && this.cartBooks.length > 0;
  }

  get totalPrice(): number {
    let total = 0;
    this.cartBooks.forEach(function (book) {
      total += book.price;
    });
  return total;
  }

}
