import { Observable } from 'rxjs';
import { ListPedidosService } from './../../services/list-pedidos/list-pedidos.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos/pedidos';

@Component({
  selector: 'app-list-pedidos',
  changeDetection:ChangeDetectionStrategy.OnPush,

  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.scss']
})
export class ListPedidosComponent implements OnInit {
  public img_pedidos:string ='/assets/bolofesta/slidebf1alt.png';
  public pedidos = [
    {
      _id:'1',
      cod:'1x78e',
      nome:'joao',
      email:'joao@mail.com',
      pedido:'Bolo de Chocolate',
      preco:'R$13,00',
      dataAbertura:'21/11/2022',
      dataFechamento: '23/11/2022'
    },
    {
      _id:'2',
      cod:'2y67ur',
      nome:'Leticia',
      email:'leticia@mail.com',
      pedido:'Bolo de Laranja',
      preco:'R$14,00',
      dataAbertura:'21/11/2022',
      dataFechamento: '23/11/2022'
    },
    {
      _id:'3',
      cod:'23rty',
      nome:'Souza',
      email:'souza@mail.com',
      pedido:'Bolo de Baunilha',
      preco:'R$15,00',
      dataAbertura:'21/11/2022',
      dataFechamento: '23/11/2022'
    },
  ];
  pedidos$: Observable<Pedidos[]>;

  displayedColumns: string[] = ['_id','cod', 'nome',
   'email','pedido','preco','dataAbertura','dataFechamento'];


  constructor(private listPedidosService: ListPedidosService) { }

  ngOnInit(): void {
    this.listPedidosService.getPedidos()
    .subscribe((pedidos)=>{
    this.pedidos$ = pedidos;
    })
  }

  trackById(index: number, item:number){
  return  this.pedidos$;
  }



}
