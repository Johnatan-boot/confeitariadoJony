import { ClientesService } from './../../services/clientes/clientes.service';
import { ClientesRoutingModule } from './clientes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ClientesListComponent } from './components';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogComponent } from 'src/app/components/errordialog';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ClientesListComponent,
    ErrorDialogComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ClientesRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    ClientesService
  ]

})
export class ClientesModule { }
