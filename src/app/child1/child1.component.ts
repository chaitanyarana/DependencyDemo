import { Component, Inject, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { APIKEY } from '../value';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  //providers: [LogService]
})
export class Child1Component implements OnInit {

  message: string;
  apikey: any;
  // by passing a logService Instance here Angular get to know that
  // this component has a dependency on LogService
  constructor(private logService: LogService, @Inject(APIKEY) a) { 
    this.message = this.logService.sayHello("Child 1");
    this.apikey = a;
    console.log(this.apikey)
  }

  ngOnInit(): void {
  }

}
