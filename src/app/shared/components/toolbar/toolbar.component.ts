import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { HelperService } from '../../services/helper.service';
import { RouterConfig } from '../../../core/config/router.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  

  constructor(public cartService: CartService, public helperService: HelperService) { }
  ngOnInit() {
  }

  get RouterConfig() { return RouterConfig;}

}
