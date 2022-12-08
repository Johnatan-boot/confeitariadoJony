import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService, CartService } from 'src/app/services';


@Component({
  selector: 'app-products',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public bolostradcionais: string = './assets/bolotradcional/slidebolot12Alt.png';
  public bolosCobertura: string = './assets/bolocobert/slidebc1alt.png';
  public bolosFesta: string = './assets/bolofesta/slidebf1alt.png';
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe((res: any)=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ===" bolostradcionais " || a.category ===" boloscobertura "){
          a.category =" bolos"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

}
