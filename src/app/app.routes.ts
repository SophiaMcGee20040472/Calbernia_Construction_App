
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(component => component.Home),
    title: 'Calbernia GM | Landscaping & Garden Design'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(component => component.About),
    title: 'About Us | Calbernia GM'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then(component => component.Services),
    title: 'Our Services | Calbernia GM'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(component => component.Contact),
    title: 'Contact Us | Calbernia GM'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
