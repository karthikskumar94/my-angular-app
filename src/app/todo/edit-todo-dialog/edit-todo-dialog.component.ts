import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent {
  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder, private todoService: TodoService, public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.editForm=this.fb.group({
      userId:[data.userId, Validators.required],
      id:[{value:data.id, disabled: true}],
      title: [data.title, Validators.required],
      completed:[data.completed?'true':'false', Validators.required]
    });
  }

  ngOnInit():void{}

  onSave():void{
    if(this.editForm.valid){
      const updatedTodo={ ...this.editForm.getRawValue(), completed: this.editForm.value.completed==='true'};
      this.todoService.updateTodo(updatedTodo).subscribe(() => {
        this.dialogRef.close(updatedTodo);
      });
    }
  }

  onCancel(): void{
    this.dialogRef.close();
  }

}
