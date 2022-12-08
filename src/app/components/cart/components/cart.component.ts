import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from 'src/app/services';

@Component({
  selector: 'app-cart',
    changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component .scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
