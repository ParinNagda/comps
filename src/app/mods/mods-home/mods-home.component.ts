import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  constructor() { }
  modalState = false;
  items = [
    {items:'Is Sky Blue?',content:'Yes it is'},
    {items:'Is Orange Black?',content:'No it is not'},
    {items:'Are you the best?',content:'Hell Yeah!'},
  ]
  ngOnInit(): void {
  }

  toggleModal(){
    this.modalState = !this.modalState;
  }
}
