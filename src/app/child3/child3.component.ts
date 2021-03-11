import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { UpdatedLogService } from '../updated-log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message: string;
  // by passing a logService Instance here Angular get to know that
  // this component has a dependency on LogService
  constructor(private logService: UpdatedLogService) { 
    this.message = this.logService.sayHello("Child 3");
  }

  ngOnInit(): void {
  }

}
