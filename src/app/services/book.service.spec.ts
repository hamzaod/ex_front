import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { BookService } from './book.service';
import { BookComponent } from '../modules/book/page/book.component';

describe('BookService', () => {
  let fixture: ComponentFixture<BookComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });
  });

  it('should be created', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('should display books data', () => {
    const bookService = fixture.debugElement.injector.get(BookService);
    const mockData: any = [{ isbn3: '1',
                        title: 'title',
                        price: 10,
                        cover: 'cover',
                        synopsis: ['synopsis', 'fff']
                      }];
                      
    let getBook = spyOn(bookService, 'getAllBooks').and.returnValue(mockData);
    expect(getBook).toEqual(mockData);
    fixture.detectChanges();
  });

  it('should display isbn books values', () => {
    const bookService = fixture.debugElement.injector.get(BookService);
    const mockData: any = '1,2,3';
    let getIsbn = spyOn(bookService, 'getAllIsbnValue').and.returnValue(mockData);
    expect(getIsbn).toEqual(mockData);
    fixture.detectChanges();
  });

});