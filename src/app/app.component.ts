import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section1GettingStarted';
  data:string=''
  data2:string=''
  getData(){
    return this.data
  }
  disabled=false



  toggle(){
    this.disabled=!this.disabled
  }

  inp(e:Event){
    this.data2=  (<HTMLInputElement>e.target).value
  }
}
