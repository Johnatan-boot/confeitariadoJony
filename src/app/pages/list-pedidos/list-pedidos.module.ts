import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListPedidosService } from './../../services/list-pedidos/list-pedidos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPedidosRoutingModule } from './list-pedidos-routing.module';
import { ListPedidosComponent } from './list-pedidos.component';


@NgModule({
  declarations: [
    ListPedidosComponent
  ],
  imports: [
    CommonModule,
    ListPedidosRoutingModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers:[
    ListPedidosService,
  ]
})
export class ListPedidosModule { }
