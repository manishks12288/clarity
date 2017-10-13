import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './../models/user.model';
@Injectable()
export class UserListService {
  user_list_url = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: Http) { }

  getUserList(): Observable<User[]> {
    return this.http.get(this.user_list_url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // succesfull response
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  // Error handling
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
