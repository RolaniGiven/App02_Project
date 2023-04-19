import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'cart', component: CartComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'products', component: ProductsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
