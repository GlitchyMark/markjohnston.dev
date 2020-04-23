import { Component, OnInit, Input, Output } from '@angular/core';
import { Location, getLocaleDateFormat } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-tile',
  inputs: ['tileColor'],
  template: `
    <div class="tile" routerLink="{{Route}}" routerLinkActive="active" style.color={{getColor()}}>{{Name}}</div>
    `,
  styles: [`
  .tile{
    background-color: #333333;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in, box-shadow 0.0s 0.2s;
    cursor: pointer;
    padding: 15px 15px;
    font-size: 15px;
    outline: none;
  }
  .tile:hover {
    transition: background-color 0.2s ease-in, box-shadow 0.0s 0.0s;
    background-color: #555555;
    box-shadow: 0 0 8px 8px #333333 inset;
  }
  `]
})
export class TileComponent implements OnInit {
    route: string;
    tileColor: string;
    @Input() 
    Route: string;
    @Input() 
    Name: string;
    

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path().substr(1);
      } else {
        this.route = "/";
      }
    });
  }

  getColor(): string {

    if(this.route === this.Route)
        return "lightblue";
    else
        return "white";
  }
  ngOnInit(): void {
  }

}
