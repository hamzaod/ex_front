import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { HttpLoaderFactory } from './shared/shared.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BookModule } from './modules/book/book.module';

const TRANSLATIONS_FR = require('../assets/i18n/fr-FR.json');

describe('AppComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
        BookModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        AppComponent
      ],providers: [TranslateService]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should load translations', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('fr-FR');
    const fixture = TestBed.createComponent(AppComponent);

    translate.use('fr-FR');
    http.expectOne('/assets/i18n/fr-FR.json').flush(TRANSLATIONS_FR);

    http.verify();

    fixture.detectChanges();
  }));

});
