import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ProfileComponent } from './components/profile-component/profile-component';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:()=> import('./components/login/login').then(m=>m.Login)
    },{
        path:'profile',
        loadComponent:()=> import('./components/profile-component/profile-component').then(m=>m.ProfileComponent)
    }

];
