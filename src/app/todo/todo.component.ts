import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { Observable, filter } from 'rxjs';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any[] = [];
  editForm!: FormGroup;
  editingTodo: any = null;
  p: number = 1;
  searchId: string = '';
  filteredTodos: any[] = [];

  constructor(private todoService: TodoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
      this.filteredTodos = data;
    });
  }

  onDelete(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.filteredTodos = this.filteredTodos.filter(todo => todo.id !== id);
    });
    this.editForm.reset();
  }

  onEdit(todo: any): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '300px',
      data: { ...todo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTodoList(result);
      }
    });
  }

  onSave(): void {
    if (this.editForm.valid) {
      const updatedTodo = { ...this.editForm.getRawValue(), completed: this.editForm.value.completed === 'true' };
      console.log('Saving todo:', updatedTodo);
      this.todoService.updateTodo(updatedTodo).subscribe(() => {
        const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
        this.todos[index] = updatedTodo;
        this.editingTodo = null;
        this.editForm.reset();
        this.loadTodos();
      });
    }
  }

  onCancel(): void {
    this.editingTodo = null;
    this.editForm.reset();
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(AddTodoDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todos.push(result);
        this.filteredTodos.push(result);
      }
    });
  }

  onSearchId(): void {
    if (this.searchId.trim() !== '') {
      const id = parseInt(this.searchId, 10);
      if (!isNaN(id)) {
        this.filteredTodos = this.todos.filter(todo => todo.id === id);
      }
      else {
        this.filteredTodos = this.todos
      }
    }
    else {
      this.filteredTodos = this.todos;
    }
    this.p=1;
  }

  clearSearch(): void {
    this.searchId = '';
    this.filteredTodos = this.todos;
    this.p=1;
  }

  private updateTodoList(updatedTodo: any): void {
    const todosIndex = this.todos.findIndex(t => t.id === updatedTodo.id);
    if (todosIndex !== -1) {
      this.todos[todosIndex] = updatedTodo;
    }
    const filteredTodosIndex = this.filteredTodos.findIndex(t => t.id === updatedTodo.id);
    if (filteredTodosIndex !== -1) {
      this.filteredTodos[filteredTodosIndex] = updatedTodo;
    }
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    if (value && !/^\d+$/.test(value)) {
      input.value = value.replace(/\D/g, '');
    }
  }
}