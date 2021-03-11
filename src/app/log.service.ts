import { Injectable } from '@angular/core';

// Injectable decorator makes this as a injectable service to any component
// @Injectable({
//   // bydefault it will be a singleton service
//   // Also it is a tree-shakeble service which means if it is not
//   // used somewhere thn it will not be exported
//   //providedIn: 'root'
// })

@Injectable()
export class LogService {

  // variable to check how many times the objet of LogService is created
  private static count = 0;
  constructor() { 
    LogService.count = LogService.count + 1;
    console.log(LogService.count);
  }

  sayHello(name: String){
    return "Hello"+name;
  }
}
