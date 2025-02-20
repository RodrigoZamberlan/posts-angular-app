import { Routes } from '@angular/router';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {path: '', component: CreateUserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
];
