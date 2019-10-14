import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : any=[{
    evento:1, 
  }]
  constructor() { }

  ngOnInit() {
  }

}
