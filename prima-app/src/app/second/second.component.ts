import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  pippo = "ciao";
  constructor() {
    this.pippo = "non sono più ciao!";
   }

  ngOnInit() {
  }

}
