import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  data='tuna'
  arr=[]
  counter=0
  show=true
  toggle(){
    this.show=!this.show
    this.arr.push(this.counter++)
  }
}
