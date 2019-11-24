import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './page/cart.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ CartComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
