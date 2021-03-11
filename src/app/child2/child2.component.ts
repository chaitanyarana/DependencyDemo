import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message: string;
  // by passing a logService Instance here Angular get to know that
  // this component has a dependency on LogService
  constructor(private logService: LogService) { 
    this.message = this.logService.sayHello("Child 2");
  }

  ngOnInit(): void {
  }

}
