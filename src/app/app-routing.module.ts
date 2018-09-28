import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MenuComponent } from './layout/menu/menu.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // route login
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: '',
    component: MenuComponent,
    children: [
      // route admin
      { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardPageModule' },
      // route director
      { path: 'dashboard', loadChildren: './manager/dashboard/dashboard.module#DashboardPageModule' },
      // route manager
      { path: 'dashboard', loadChildren: './director/dashboard/dashboard.module#DashboardPageModule' },
      // route agent
      { path: 'dashboard', loadChildren: './agent/dashboard/dashboard.module#DashboardPageModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
