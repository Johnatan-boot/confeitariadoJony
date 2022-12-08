import { UsuariosListComponent } from './components/usuarios-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent, CadastroPjComponent } from 'src/app/components/cadastro';



export const ClientesRoutes: Routes = [
	{
		path: 'list-usuarios',
		component: UsuariosListComponent,

	},
  {path:'list-usuarios/new', component:CadastroPfComponent},
  {path:'list-usuarios/new', component:CadastroPjComponent},

];

@NgModule({
  imports: [
  	RouterModule.forChild(ClientesRoutes)
  ],
  exports: [
    RouterModule,

  ]
})
export class UsuariosRoutingModule { }
