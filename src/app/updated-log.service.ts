import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedLogService {

  private static count = 0;
  constructor() { 
    UpdatedLogService.count = UpdatedLogService.count + 1;
    console.log(UpdatedLogService.count);
  }

  sayHello(name: String){
    return "Hello updated "+name;
  }

  sayBye(name: String){
    return "Bye "+name;
  }
}
