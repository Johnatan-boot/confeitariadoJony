import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BoloscoberturaComponent } from './pages/boloscobertura/boloscobertura.component';
import { BolosfestasComponent } from './pages/bolosfestas/bolosfestas.component';
import { BolostradcionaisComponent } from './pages/bolostradcionais/bolostradcionais.component';
import { HomeComponent } from './pages/home/home.component';
import { MediaComponent } from './pages/media/media.component';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { PagesComponent } from './pages/pages.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home', component: FooterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'bolos-tradcionais', component: BolostradcionaisComponent},
  {path: 'bolos-cobertura', component: BoloscoberturaComponent},
  {path: 'bolos-festas', component: BolosfestasComponent},
  {path: 'orcamentos', component: OrcamentosComponent},
  {path: 'perfil-social', component: PerfilComponent},
  {path: 'list-pedidos', component: ListPedidosComponent},
  {path: 'media', component: MediaComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'settings', component: SettingsComponent},
  { path: 'list-pedidos', loadChildren: () => import('./pages/list-pedidos/list-pedidos.module').then(m => m.ListPedidosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
