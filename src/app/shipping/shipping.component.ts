import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import { NgIf } from '@angular/common';
// import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  // standalone: true,
  // imports: [
  //   NgIf,
  //   CommonModule
  // ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  
  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
  constructor(private cartService: CartService) { }
}
