import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { CounterComponent } from './components/counter/counter.component';

import { MatDatepickerModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [UserListComponent, UserCreateComponent, UserDeleteComponent, CounterComponent],
  imports: [
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule { }
