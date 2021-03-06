import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserCreateComponent } from './users/components/user-create/user-create.component';
import { UserDeleteComponent } from './users/components/user-delete/user-delete.component';
import { CounterComponent } from './users/components/counter/counter.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-list', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent },
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-delete', component: UserDeleteComponent},
  {path: 'counter', component: CounterComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
