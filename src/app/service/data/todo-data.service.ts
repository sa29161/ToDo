import { Todo } from './../../list-todo/list-todo.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodos(username,id){
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodos(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodos(username,id,todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  createTodos(username,todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos`,todo)
  }

}
