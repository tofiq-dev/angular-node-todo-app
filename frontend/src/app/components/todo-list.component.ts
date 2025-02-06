import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <h2>Todo List</h2>
    <input [(ngModel)]="newTodo" placeholder="Enter todo"/>
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo.text }} <button (click)="deleteTodo(todo._id)">Delete</button>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  async fetchTodos() {
    const response = await this.todoService.getTodos();
    this.todos = response.data;
  }

  async addTodo() {
    await this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.fetchTodos();
  }

  async deleteTodo(id: string) {
    await this.todoService.deleteTodo(id);
    this.fetchTodos();
  }
}
