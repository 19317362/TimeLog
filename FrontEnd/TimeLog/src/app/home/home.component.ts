import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public loggingData: Array<any>;
  public currentLogging: any;

  // implements OnInit

  constructor(private timeService: TimeService) {

    timeService.get().subscribe((data: any) => this.loggingData = data);
    this.currentLogging = this.setInitialValuesForLoggingData();
   }

  ngOnInit() {
  }

  private setInitialValuesForLoggingData () {
    return {
      id: undefined,
      date: '',
      distanceInMeters: 0,
      timeInSeconds: 0
    }
  }

  public createOrUpdateLogging = function(logging: any) {
    // if logging is present in loggingData, we can assume this is an update
    // otherwise it is adding a new element
    let loggingWithId;
    loggingWithId = _.find(this.loggingData, (el => el.id === logging.id));

    if (loggingWithId) {
      const updateIndex = _.findIndex(this.loggingData, {id: loggingWithId.id});
      this.timeService.update(logging).subscribe(
        loggingRecord =>  this.loggingData.splice(updateIndex, 1, logging)
      );
    } else {
      this.timeService.add(logging).subscribe(
        loggingRecord => this.loggingData.push(logging)
      );
    }

    this.currentLogging = this.setInitialValuesForLoggingData();
  };


  public editClicked = function(record) {
    this.currentLogging = record;
  };

  public newClicked = function() {
    this.currentLogging = this.setInitialValuesForLoggingData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.loggingData, {id: record.id});
    this.timeService.remove(record).subscribe(
      result => this.loggingData.splice(deleteIndex, 1)
    );
  }



}
