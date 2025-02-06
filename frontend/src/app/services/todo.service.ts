import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = 'http://localhost:5000/api/todos';

  async getTodos() {
    return await axios.get(this.apiUrl);
  }

  async addTodo(text: string) {
    return await axios.post(this.apiUrl, { text });
  }

  async deleteTodo(id: string) {
    return await axios.delete(`${this.apiUrl}/${id}`);
  }
}
