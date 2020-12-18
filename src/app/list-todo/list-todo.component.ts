import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})

export class ListTodoComponent implements OnInit {

  todos = [
    new Todo(1, 'learn to dance',false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3,'visit Norway',false,new Date())
    // {id: 1, description: 'Learn to Dance'},
    // {id: 2, description: 'Become an expert'},
    // {id: 3, description: 'Visit NOrway'}
  ]

  todo = {
    id: 1,
    description: 'learn to code'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}
