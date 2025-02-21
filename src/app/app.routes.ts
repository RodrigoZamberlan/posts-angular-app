import { Routes } from '@angular/router';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: CreateUserComponent},
    {path: 'sign-up', component: CreateUserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    { path: '**', component: PageNotFoundComponent }
];
