import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Output() joggingCreated = new EventEmitter<any>();
  @Input() joggingInfo: any;
  public buttonText = 'Save';

  constructor() { 
    this.clearAllInfo();
    console.log(this.joggingInfo.date);
  }

  ngOnInit() {
  }

  private clearAllInfo = function() {
    // Create an empty jogging object
    this.joggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };

  public addOrUpdateJoggingRecord = function(event) {
    this.joggingCreated.emit(this.joggingInfo);
    this.clearAllInfo();
  };


}
