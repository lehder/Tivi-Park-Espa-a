import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { MenuComponent } from './menu/menu.component';

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
        { 
        path: 'menus',
        component: MenuComponent, pathMatch: 'full'
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
