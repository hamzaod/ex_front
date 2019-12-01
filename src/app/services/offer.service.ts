import { Injectable } from '@angular/core';
import { OfferEnum} from '../enums/offer.enum';
import { Offer } from '../models/offer.model';
import { CartService } from './cart.service';
import { BookService } from './book.service';
import { ApiService } from '../shared/services/api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private cartService: CartService, private apiService: ApiService, private bookService: BookService) { }

  getOffers() {
    return this.apiService.get(`/books/` + this.bookService.getAllIsbnValue(this.cartService.cartBooks) + `/commercialOffers`)
      .pipe(map((data: any) => data.offers));
  }

  calculate(offer: Offer, finalPrice: number): number {
    switch(offer.type) { 
      case OfferEnum.PERCENTAGE.toString(): { 
        return finalPrice - (finalPrice * offer.value / 100);
        break; 
      } 
      case OfferEnum.MINUS.toString(): { 
        return finalPrice - offer.value;
        break; 
      } 
      case OfferEnum.SLICE.toString(): { 
        const slices = Math.floor(finalPrice / offer.sliceValue)
        return finalPrice - slices * offer.value;
        break; 
    } 
   } 
  }
}

