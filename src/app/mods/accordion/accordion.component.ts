import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }
  @Input() itemList : any;
  openedItemIndex = 0;
  ngOnInit(): void {
  }

  getClassName(val:number) {
    if(val == this.openedItemIndex) {
      return 'active'
    }
    return '';
  }

  setOpened(val:number) {
    console.log(val,this.openedItemIndex);
    
    if(val == this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
    this.openedItemIndex = val;
    }
  } 

}
