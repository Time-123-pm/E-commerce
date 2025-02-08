import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { catchError, map, of } from 'rxjs';


@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  constructor(private apiService: ApiService, private cartService: CartService, private route: ActivatedRoute) { }

  product: any = null;
  cartItem: any = null;
  productId: any = null;
  error: any = null;

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.fetchProduct();
  }

  //get products
  async fetchProduct() {
    console.log("PRODUCT ID IS: " + this.productId)
    if (this.productId) {
      this.apiService.getProductById(this.productId).pipe(
        catchError(error => {
          console.log("ERROR IS: " + JSON.stringify(error))
          this.error = error.message;
          return of(null);
        }),
        map(response => response.product)
      ).subscribe(prodt => {
        if (prodt) {
          this.product = prodt
          this.cartItem = this.cartService.getCartItem(Number(this.productId));
        }
      });
    }
  }
  //add to cart option func
  addToCart() {
    if (this.productId) {
      this.cartService.addItem(this.product);
      this.cartItem = this.cartService.getCartItem(this.product.id)
    }
  }
  //increase quantity button func
  incrementItem() {
    if (this.product) {
      this.cartService.incrementItem(this.product.id);
      this.cartItem = this.cartService.getCartItem(this.product.id)
    }
  }

  //decrease quantity button func
  decrementItem() {
    if (this.product && this.cartItem) {
      if (this.cartItem.quantity > 1) {
        this.cartService.decrementItem(this.product.id)
      } else {
        this.cartService.removeItem(this.product.id)
      }
      this.cartItem = this.cartService.getCartItem(this.product.id)
    }
  }
}
