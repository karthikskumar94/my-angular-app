import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CompletionTriggerKind } from 'typescript';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent {
  addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    public dialogRef: MatDialogRef<AddTodoDialogComponent>
  ) {
    this.addForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      completed: ['false', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSave(): void {
    if (this.addForm.valid) {
      const newTodo = { ...this.addForm.value, completed: this.addForm.value.completed === 'true' };
      this.todoService.addTodo(newTodo).subscribe(result => {
        this.dialogRef.close(result);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
