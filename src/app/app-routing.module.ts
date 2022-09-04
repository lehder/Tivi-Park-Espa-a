import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {  
    path: '',
    component: LayoutComponent,
    children:  [   
      { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
       }, 
       { 
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule )
        }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,                relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
