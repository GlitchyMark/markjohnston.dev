import { Component, OnInit } from '@angular/core';
import { TileComponent } from './tile.component';
import {pages} from './pages';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  pages = pages;
  constructor() { }

  ngOnInit(): void {
  }

}
