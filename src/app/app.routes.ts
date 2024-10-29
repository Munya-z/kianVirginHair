import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'contact', component: ContactComponent,
    },
    {
        path: 'about', component: AboutComponent,
    },
    {
        path: '**', component: NotFoundComponent,
    }
];
