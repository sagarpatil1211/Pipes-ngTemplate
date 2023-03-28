import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  symbol = "{{ | }}";

  today = new Date;

  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  fullName = { name:'Sagar', surname:'Patil', adddress: 'Kolhapur'}
}
