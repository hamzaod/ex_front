import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import localeDeExtra from '@angular/common/locales/extra/fr';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BookModule } from './modules/book/book.module';
import { CartModule } from './modules/cart/cart.module';
import { AppConfig } from './core/config/app.config';



registerLocaleData(localeDe, AppConfig.locale, localeDeExtra);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    BookModule,
    CartModule,
    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: AppConfig.locale
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
