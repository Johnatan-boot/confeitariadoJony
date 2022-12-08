import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './list-pedidos.component';

const routes: Routes = [{ path: 'list-pedidos', component: ListPedidosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPedidosRoutingModule { }
