import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './page/book.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ BookComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookModule { }
