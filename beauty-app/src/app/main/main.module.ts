import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { ProductsComponent } from './products/products.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NewPostComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
