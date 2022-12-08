import { ClientesListComponent } from './components/clientes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent, CadastroPjComponent } from 'src/app/components/cadastro';



export const ClientesRoutes: Routes = [
	{
		path: 'clientes',
		component: ClientesListComponent,

	},
  {path:'clientes/new', component:CadastroPfComponent},
  {path:'clientes/new', component:CadastroPjComponent},

];

@NgModule({
  imports: [
  	RouterModule.forChild(ClientesRoutes)
  ],
  exports: [
    RouterModule,

  ]
})
export class ClientesRoutingModule { }
