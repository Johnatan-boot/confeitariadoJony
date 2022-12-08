import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService, CartService } from 'src/app/services';

@Component({
  selector: 'app-boloscobertura',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './boloscobertura.component.html',
  styleUrls: ['./boloscobertura.component.scss']
})
export class BoloscoberturaComponent implements OnInit {

  public bolostradcionais: string = './assets/bolotradcional/slidebolot12Alt.png';
  public bolosCobertura: string = './assets/bolocobert/slidebc1alt.png';
  public bolosFesta: string = './assets/bolofesta/slidebf1alt.png';
  public boloCobertura : any ;
  public filterCategory : any
  searchKey:string ="";

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    this.api.getProductz()
    .subscribe((res: any)=>{
      this.boloCobertura = res;
      this.filterCategory = res;
      this.boloCobertura.forEach((a:any) => {
        if(a.category ===" bolostradcionais " || a.category ===" boloCobertura "){
          a.category =" bolos"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.boloCobertura)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.boloCobertura
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
