import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  show=true
  color='red'

  getColor(){
    this.color=Math.random()>0.5?'red':'blue'
  }
}
