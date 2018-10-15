import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Output() loggingCreated = new EventEmitter<any>();
  @Input() loggingInfo: any;
  public buttonText = 'Save';

  constructor() { 
    this.clearAllInfo();
    console.log(this.loggingInfo.date);
  }

  ngOnInit() {
  }

  private clearAllInfo = function() {
    // Create an empty logging object
    this.loggingInfo = {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    };
  };

  public addOrUpdateLoggingRecord = function(event) {
    this.loggingCreated.emit(this.loggingInfo);
    this.clearAllInfo();
  };


}
