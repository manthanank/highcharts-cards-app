import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/component/component.module').then(m => m.ComponentModule),

  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
