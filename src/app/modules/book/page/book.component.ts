import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
    public cartService: CartService) { }

  ngOnInit() {
    this.getAllBooks();    
  } 

  getAllBooks() {
    return this.bookService.getAllBooks().subscribe(
      (booksData: Book[]) => {
        this.books = booksData;
      }
    );
  }


}
