
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { StarComponent } from './components/star/star.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '' , component:StarComponent},
  { path: 'home',canActivate: [AuthGuard]  ,component: HomeComponent },

  { path: 'register' , component: RegisterComponent },
  { path: 'login' , component:LoginComponent},
  { path: 'cart',canActivate: [AuthGuard], component: CartComponent },
  { path: 'allproducts', canActivate: [AuthGuard], component: AllproductsComponent },
  { path: 'favorite', canActivate: [AuthGuard], component: FavoriteComponent },
  { path: 'productdetails/:id',canActivate: [AuthGuard] ,component: ProductdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
