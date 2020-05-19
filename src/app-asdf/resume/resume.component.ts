import { Component, OnInit } from '@angular/core';
import {convertToHtml} from 'mammoth/mammoth.browser';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  private http: HttpClient

  getResumeHTML(): string | ArrayBuffer
  {
    console.log("hi");
      return "hello ";

  }
}
