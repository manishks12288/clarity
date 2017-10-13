import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
 private userId: number;
  constructor() { }
  setUserId(userId) {
    this.userId = userId;
  }
  getUserId(){
    return this.userId;
  }

}
