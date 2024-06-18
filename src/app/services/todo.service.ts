import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl='https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteTodo(id: number):Observable<any>{
    const url=`${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateTodo(todo: any): Observable<any>{
    const url=`${this.apiUrl}/${todo.id}`;
    return this.http.put(url, todo);
  }

  addTodo(todo: any): Observable<any>{
    return this.http.post(this.apiUrl, todo);
  }
}