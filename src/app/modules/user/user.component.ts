import { Component, OnInit } from '@angular/core';
import { UserListService } from './../../services/user-list.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];
  errorMessage: String;
  constructor(private userListService: UserListService, private sharedService: SharedService, private router: Router) { }
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(): void {
    this.userListService.getUserList().subscribe(
      userlist => {
        this.userList = userlist;
        console.log(this.userList);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    );
  }
  goToTodoList(userId){
    this.sharedService.setUserId(userId);
    this.router.navigateByUrl("/todo");
  }

}
