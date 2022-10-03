import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component'; 
import { HomeRoutingModule } from './home.routing.module';
import { CardComponents } from './components/card/card.component';
import { FooterComponent } from '../footer/footer.component';  
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
    declarations:  [
        BannerComponent,
        CardComponents,
        HomeComponent, 
        FooterComponent 
    ], 
    imports:  [
        CommonModule,
        HomeRoutingModule,
        GoogleMapsModule,
    ]      
})

export class HomeModule {

}