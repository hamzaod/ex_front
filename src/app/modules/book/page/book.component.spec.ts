import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TranslateService} from "@ngx-translate/core";
import { BookComponent } from './book.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BookService } from '../../../services/book.service';

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookComponent],
            imports: [
                HttpClientTestingModule,
                NoopAnimationsModule,
                RouterTestingModule,
                SharedModule,
                TranslateModule.forRoot()
              ],
              providers: [TranslateService, BookService]
        })
            .compileComponents();
          
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display books data', () => {
        const bookService = fixture.debugElement.injector.get(BookService);
        const mockData: any = [{ isbn3: '1',
                            title: 'title',
                            price: 10,
                            cover: 'cover',
                            synopsis: ['synopsis', 'fff']
                          }];
                          
        spyOn(bookService, 'getAllBooks').and.returnValue(mockData);
   
        fixture.detectChanges();
      });

    
});