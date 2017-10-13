import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { SharedService } from './../../services/shared.service';
import { Todo } from './../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  errorMessage: String;
  userId: number;
  todo: Todo;
  constructor(private todoService: TodoService, private sharedService: SharedService) { }
  ngOnInit(): void {
    this.todo = new Todo();
    this.userId = this.sharedService.getUserId();
    let todoListFromCache = this.todoService.getFromCache(this.userId);
    if(todoListFromCache === null){
      this.getTodoList();
    }else{
      this.todoList = JSON.parse(todoListFromCache);
    }    
  }
  getTodoList(): void {
    this.todoService.getTodoList(this.userId).subscribe(
      todolist => {
        this.todoList = todolist;
        this.todoService.saveInCache(JSON.stringify(this.todoList), this.userId); //save todo list in localstorage
        console.log(this.todoList);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    );
  }
  createTodo():void {
    this.todo.id = this.todoList[this.todoList.length - 1].id + 1;
    this.todo.userId = this.userId;
    this.todo.completed = false;
    this.todoList.push(this.todo);
    // save in lacalstorage
    this.todoService.saveInCache(JSON.stringify(this.todoList), this.userId);
    // save in server db
    this.saveTodo(this.todo);
    alert('Todo has been added in Todo List.');
  }
  updateStatus(todo){
    todo.completed = !todo.completed;
    this.todoService.updateTodoStatus(todo).subscribe(
      res => {
        console.log(res);
        this.saveTodo(todo); //save update todo in db
        this.todoService.saveInCache(JSON.stringify(this.todoList), this.userId);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    );
  }
  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe(
      res => {
        this.todoList.forEach((element,index) => {
          if(element.id == id){
            this.todoList.splice(index,1); // remove from list 
          } 
        });
        // updated todo list in localstorage
        this.todoService.saveInCache(JSON.stringify(this.todoList), this.userId);
        console.log(res);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    );
  }
  saveTodo(todo){
    this.todoService.saveTodo(todo).subscribe(
      res => {
        console.log(res);
      },
      error => {
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
      }
    );
  }

}
