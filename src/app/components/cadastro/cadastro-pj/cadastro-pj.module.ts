import { CadastroPjRoutingModule } from './cadastro-pj-routing.module';
import { CadastroPjComponent } from './components/cadastro-pj.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroPjService } from 'src/app/services';

@NgModule({
  declarations: [
        CadastroPjComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    CadastroPjRoutingModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
   CadastroPjService,
  ]
})
export class CadastroPjModule { }
