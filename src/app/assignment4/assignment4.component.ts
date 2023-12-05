import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component {
  counter=0
  s:any
  start(){
    this.s = setInterval(()=>{this.counter++},1000)
  }
  stop(){
    clearInterval(this.s)
  }
}
