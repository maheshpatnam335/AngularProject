import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicComponent } from './public.component';
import {RouterModule} from '@angular/router'
import { PublicRoutingRoutingModule } from './public-routing-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailsComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,RouterModule,PublicRoutingRoutingModule
  ]
})
export class PublicModule { }
