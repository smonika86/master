import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PageComponent } from './components/page/page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'menu',
    component:MenuComponent
  },
  {
    path: '',
    component:MenuComponent
  },
  {
    path: 'product/:id',
    component:ProductDetailsComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
