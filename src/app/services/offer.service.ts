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


  isPercentageOffer(offerLabel: string) {
   return offerLabel === OfferEnum.PERCENTAGE.toString();
  }

  isMinusOffer(offerLabel: string) { 
    return offerLabel === OfferEnum.MINUS.toString();
  }

  isSliceOffer(offerLabel: string) {
    return offerLabel === OfferEnum.SLICE.toString();
  }

  calculate(offer: Offer, finalPrice: number): number {
  
    if(this.isPercentageOffer(offer.type)) {
      return finalPrice - (finalPrice * offer.value / 100);
    }
    if(this.isMinusOffer(offer.type)) {
      return finalPrice -  offer.value;
    }
    if(this.isSliceOffer(offer.type)) {
      const slices = Math.floor(finalPrice / offer.sliceValue)
      return finalPrice - slices * offer.value;
    }
  }
}

