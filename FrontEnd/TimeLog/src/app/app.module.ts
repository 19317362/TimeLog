import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from './time.service';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
