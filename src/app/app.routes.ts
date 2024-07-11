import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: "EfrainAscuna",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    }
];
