import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from '../header';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';


@NgModule({
  declarations: [
    //HeaderComponent,

  ],

  imports: [
    RouterModule.forChild([
      {
          path: 'home', component: HomeComponent
      },
    ]),

    CommonModule,
    NgbModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
  ]


})
export class NavbarModule { }
