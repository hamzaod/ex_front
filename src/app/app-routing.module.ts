import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './modules/book/page/book.component';
import { CartComponent } from './modules/cart/page/cart.component';
import { RouterConfig } from './core/config/router.config';

const routes: Routes = [
  { path: '', 
    redirectTo: RouterConfig.BOOK_PAGE.path,
    pathMatch: 'full'
  },
  {
    path: RouterConfig.BOOK_PAGE.name,
    component: BookComponent
  },
  { path: RouterConfig.CART_PAGE.name,
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
