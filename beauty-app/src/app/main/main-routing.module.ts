import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ProductsComponent } from './products/products.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { ContactsComponent } from '../contacts/contacts.component';


const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BodyComponent
      },
      {
        path: ':itemId',
        component: ProductsComponent,
        canActivate: [AuthActivate]
      }
    ],
    },
    {
        path: 'blog',
        component: NewPostComponent,
    },
    {
      path: 'contactUs',
      component: ContactsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}