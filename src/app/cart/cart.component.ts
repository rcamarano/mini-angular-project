import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }
}
