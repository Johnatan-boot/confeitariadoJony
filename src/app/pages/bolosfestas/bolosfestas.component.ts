import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService, CartService } from 'src/app/services';

@Component({
  selector: 'app-bolosfestas',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './bolosfestas.component.html',
  styleUrls: ['./bolosfestas.component.scss']
})
export class BolosfestasComponent implements OnInit {

  public bolostradcionais: string = './assets/bolotradcional/slidebolot12Alt.png';
  public bolosCobertura: string = './assets/bolocobert/slidebc1alt.png';
  public bolosFesta: string = './assets/bolofesta/slidebf1alt.png';
  public bolofestas : any ;
  public filterCategory : any
  searchKey:string ="";

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    this.api.getProdutz()
    .subscribe((res: any)=>{
      this.bolofestas = res;
      this.filterCategory = res;
      this.bolofestas.forEach((a:any) => {
        if(a.category ===" bolostradcionais " || a.category ===" boloCobertura "){
          a.category =" bolos"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.bolofestas)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.bolofestas
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
