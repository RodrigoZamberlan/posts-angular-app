import { Routes } from '@angular/router';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    {path: '', component: CreateUserComponent},
    {path: 'login', component: LoginComponent}
];
