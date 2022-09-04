import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponents implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  position = {
    lat: -34.681,
    lng: -58.371
 };

 label = {
   color: 'Marcador',
   text: 'Marcador'
 };

}
