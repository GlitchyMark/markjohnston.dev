import { Component, OnInit } from '@angular/core';
import {convertToHtml} from 'mammoth/mammoth.browser';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { 
  }

  private filebuff : ArrayBuffer;
  public html : string;
  ngOnInit(): void {
    this.html = "temp";
    this.loadResume()
  }
  

  loadResume()
  {
    this.html = "Loading Resume...";
    var that = this;
    var request = new XMLHttpRequest();

    request.open( 'GET', './assets/Resume.docx', true );
    request.responseType = 'arraybuffer';
    var text : string;
    
    request.onload = function() {
      convertToHtml({arrayBuffer: request.response})
      .then(function(result){
        that.html = result.value;
        console.log(result.value);
        var messages = result.messages;
        
    })
    .done();
    }
    request.send();
    
  }
}
