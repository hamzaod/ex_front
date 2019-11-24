import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { CartService } from '../../../services/cart.service';
import { Book } from '../../../models/book.model';
import { Offer } from '../../../models/offer.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService, private offerService: OfferService) { }

  finalPrice: number = 0;

  ngOnInit() {
    // Applicate the offer when cart is open
    if(this.cartService.isNotEmpty())
      this.getAndApplicateAllOffers();
  }

  getAndApplicateAllOffers() {
    return this.offerService.getOffers().subscribe(
      (offerData: Offer[]) => {
        // Calculate offer
         this.offerCalculate(offerData);
      }
    );
  }

  offerCalculate(offers: Offer[]) {
      // Get current price without offer
      this.finalPrice = this.cartService.totalPrice;

      offers.forEach(offer => {
        this.finalPrice = this.offerService.calculate(offer, this.finalPrice);
      });; 
  }

  removeBookFromCart(book: Book){
    this.cartService.removeFromChart(book);

    // Calculate the price when book removed from cart
    if(this.cartService.isNotEmpty())
      this.getAndApplicateAllOffers();
  }
  
}
