import { Component, OnInit } from '@angular/core';
import { TileComponent } from './tile.component';
import {pages} from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pages = pages;
  constructor() { }

  ngOnInit(): void {
  }

  getRepos(): string {
    //https://api.github.com/users/MJ9001/starred
    return "";
  }
}
