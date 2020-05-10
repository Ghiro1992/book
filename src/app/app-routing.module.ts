import { GestioneComponent } from './features/gestione/gestione.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './features/product-detail/product-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginGuard} from './login.guard';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
const ApiUrl = 'http://localhost:81/bookServer/';

const routes: Routes = [
  /*ho protetto la dashboard con routeGuard di login*/
  {path: 'book', component: DashboardComponent, canActivate: [LoginGuard]},
  {path: '', component: HomeComponent},
  {path: 'book/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
