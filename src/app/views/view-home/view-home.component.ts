import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
   stats = [
    {label:'Views',value:2000},
    {label:'Clicks',value:50},
    {label:'Conversions',value:13},
  ];

  itemList = [
    {item:'Couch',description:'Good Couch',imageUrl:'assets/images/couch.jpeg'},
    {item:'Dresser',description:'Good Dresser',imageUrl:'assets/images/dresser.jpeg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
