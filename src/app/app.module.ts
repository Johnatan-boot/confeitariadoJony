import { FlexLayoutModule } from '@angular/flex-layout';
import { ListPedidosRoutingModule } from './pages/list-pedidos/list-pedidos-routing.module';
import { ListPedidosModule } from './pages/list-pedidos/list-pedidos.module';
import { CadastroPjRoutingModule } from './components/cadastro/cadastro-pj/cadastro-pj-routing.module';
import { CadastroPjModule } from './components/cadastro/cadastro-pj/cadastro-pj.module';
import { CadastroPfRoutingModule } from './components/cadastro/cadastro-pf/cadastro-pf-routing.module';
import { CadastroPfModule } from './components/cadastro/cadastro-pf/cadastro-pf.module';
import { CartComponent } from './components/cart/components/cart.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { LoginModule, LoginRoutingModule } from './autenticacao';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { CarrosselComponent } from './components/carrossel';
import { NavbarComponent } from './components/navbar';
import { HeaderComponent } from './components/header';
import { FilterPipe, SharedModule } from './shared';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products';
import { CartRoutingModule } from './components/cart/cart-routing.module';
import { ClientesModule, ClientesRoutingModule } from './pages/clientes';
import { UsuariosModule, UsuariosRoutingModule } from './pages/usuarios';
import { PagamentosModule, PagamentosRoutingModule } from './pages/pagamentos';
import { FooterComponent } from './components/footer/footer.component';
import { BolostradcionaisComponent } from './pages/bolostradcionais/bolostradcionais.component';
import { ModalComponent } from './components/modal/modal.component';
import { BoloscoberturaComponent } from './pages/boloscobertura/boloscobertura.component';
import { BolosfestasComponent } from './pages/bolosfestas/bolosfestas.component';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MediaComponent } from './pages/media/media.component';
import { ListorcamentosComponent } from './pages/listorcamentos/listorcamentos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AreaComponent } from './components/shared/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    SettingsComponent,
    PagesComponent,
    HomeComponent,
    CarrosselComponent,
    NavbarComponent,
    HeaderComponent,
    FilterPipe,
    CartComponent,
    FooterComponent,
    BolostradcionaisComponent,
    ModalComponent,
    BoloscoberturaComponent,
    BolosfestasComponent,
    OrcamentosComponent,
    PerfilComponent,
    MediaComponent,
    ListorcamentosComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    SharedModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    ListPedidosModule,
    ListPedidosRoutingModule,
    PagamentosModule,
    PagamentosRoutingModule,
    UsuariosModule,
    UsuariosRoutingModule,
    ClientesModule,
    ClientesRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    MatCardModule,
    CartRoutingModule,
    LoginModule,
    LoginRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    HighchartsChartModule,
  ],
  exports:[
    CarrosselComponent,
    AreaComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
