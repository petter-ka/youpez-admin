import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    data: {
      breadcrumb: 'Home'
    },
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]
