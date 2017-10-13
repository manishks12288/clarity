import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Todo } from './../models/todo.model';
@Injectable()
export class TodoService {
  todo_base_url = "https://jsonplaceholder.typicode.com/todos";
  todo_list_url = this.todo_base_url + "?userId=";
  

  constructor(private http: Http) { }

  getTodoList(userId:number): Observable<Todo[]> {
    return this.http.get(this.todo_list_url + userId)
      .map(this.success)
      .catch(this.error);
  }
  
  // using LocalStorage
  saveInCache(todoList,userId){
    localStorage.setItem('todoList-'+ userId,todoList);
  }
  getFromCache(userId){
    return localStorage.getItem('todoList-' + userId);
  }

  updateTodoStatus(todo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = this.todo_base_url + "/" + todo.id;
    return this.http.put(url, JSON.stringify(todo), {headers: headers})
    .map(this.success)
    .catch(this.error);
  }
  saveTodo(todo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = this.todo_base_url;
    return this.http.post(url, JSON.stringify(todo), {headers: headers})
    .map(this.success)
    .catch(this.error);
  }

  deleteTodo(id){
    let url = this.todo_base_url + "/" + id;
    return this.http.delete(url)
    .map(this.success)
    .catch(this.error);
  }


  // succesfull response
  private success(res: Response) {
    let data = res.json();
    return data;
  }

  // Error handling
  private error(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
