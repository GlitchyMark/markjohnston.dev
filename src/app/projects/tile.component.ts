import { Component, OnInit, Input, Output } from '@angular/core';
import { Location, getLocaleDateFormat } from "@angular/common";


@Component({
  selector: 'app-tile',
  inputs: ['tileColor'],
  template: `
    <div class="tile">
        <h2>{{Name}}</h2>
        <h3>{{Description}}</h3>
    </div>
    `,
  styles: [`
  .tile{
    background-color: #fff;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in, box-shadow 0.0s 0.2s, color 0.2s ease-in;
    cursor: pointer;
    padding: 15px 15px;
    font-size: 15px;
    outline: none;
  }
  .tile:hover {
    transition: background-color 0.2s ease-in, box-shadow 0.0s 0.0s, color 0.2s ease-in;
    background-color: #e4ebff;
    
    box-shadow: 0 0 12px 12px #ffffff inset;
  }
  `]
})
export class TileComponent implements OnInit {
    route: string;
    tileColor: string;
    @Input() 
    Name: string;
    Description: string;
    

  constructor() {

  }

  ngOnInit(): void {
  }

}
