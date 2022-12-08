import { map, catchError, of, first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos/pedidos';

const routes = {
  pedidos: () => `/pedidos`,
}

@Injectable({
  providedIn: 'root'
})
export class ListPedidosService {
  private readonly API = 'api/pedidos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Pedidos[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(pedidos => console.log(pedidos))
      );
  }

  getPedidos(){
    return this.httpClient.get(routes.pedidos()).pipe(
      map((body:any)=>body.value),
      catchError(() => of('Error, could not load pedidos : -('))
    )
  }
}

var PEDIDOS: Pedidos[] =
[
  {
    _id:'1',
    cod:'1x78e',
    nome:'joao',
    email:'joao@mail.com',
    pedido:'Bolo de Chocolate',
    preco:'R$13,00',
    dataAbertura:'21112022',
    dataFechamento: '23/11/2022'
  },
  {
    _id:'2',
    cod:'1x78e',
    nome:'ana',
    email:'ana@mail.com',
    pedido:'Bolo de Laranja',
    preco:'R$14,00',
    dataAbertura:'21/11/2022',
    dataFechamento: '23/11/2022'
  },
  {
    _id:'3',
    cod:'1x78e',
    nome:'cezar',
    email:'cezar@mail.com',
    pedido:'Bolo de Baunilha',
    preco:'R$15,00',
    dataAbertura:'19/11/2022',
    dataFechamento: '19/11/2022'
  }
];
