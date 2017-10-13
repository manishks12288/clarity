import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
  { path: 'todo', loadChildren: './modules/todo/todo.module#TodoModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
