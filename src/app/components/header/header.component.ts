import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'crash-angular';
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTesk(){
    console.log("Toggle")
  }
}
