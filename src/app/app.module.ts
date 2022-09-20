import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MatGridListModule } from '@angular/material/grid-list';

import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


//import { FooterComponent } from './footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    MenuComponent 
    //FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
