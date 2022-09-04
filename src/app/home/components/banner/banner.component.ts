import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] =  [
    'assets/decoracion/tividecoraciones.jpeg'
    
  ]     

  constructor() { }

  ngOnInit(): void {
  }

}
