import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  {path:"", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:"login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path:"home", component: HomeComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
