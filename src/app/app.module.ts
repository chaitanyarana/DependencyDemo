import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogService } from './log.service';
import { UpdatedLogService } from './updated-log.service';
import { Child3Component } from './child3/child3.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { APIKEY } from './value';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule
  ],
  // globally here we can add the injectable insted of mentioning in providedIn 'root'
  //providers: [LogService],
  // internally it looks like this
  providers: [
    {provide: LogService, useClass: UpdatedLogService},
    {provide: UpdatedLogService, useClass: UpdatedLogService},
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
    {provide: APIKEY, useValue: {apikey: "12345"}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
