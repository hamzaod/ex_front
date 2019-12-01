import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TranslateService} from "@ngx-translate/core";
import { CartComponent } from './cart.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OfferService } from '../../../services/offer.service';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let httpMock: HttpTestingController;
    let injector: TestBed;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartComponent],
            imports: [
                HttpClientTestingModule,
                NoopAnimationsModule,
                RouterTestingModule,
                SharedModule,
                TranslateModule.forRoot()
              ],
              providers: [TranslateService, OfferService]
        })
            .compileComponents();
          
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        httpMock = injector.get(HttpTestingController);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display offers data', () => {
     
    });

    
});