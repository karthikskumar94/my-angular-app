import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { RoleComponent } from './role/role.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './todo/edit-todo-dialog/edit-todo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTodoDialogComponent } from './todo/add-todo-dialog/add-todo-dialog.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AggridComponent } from './aggrid/aggrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormAgGridParentFormComponent } from './reactive-form-ag-grid-parent-form/reactive-form-ag-grid-parent-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AgGridTableComponent } from './ag-grid-table/ag-grid-table.component'
import { AgGridGroupedComponent } from './ag-grid-grouped/ag-grid-grouped.component';
import { AgGridEditableComponent } from './ag-grid-editable/ag-grid-editable.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormServiceComponent } from './reactive-form-service/reactive-form-service.component';
import { EditDialogComponent } from './ag-grid-editable/edit-dialog/edit-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    RoleComponent,
    AdminComponent,
    TodoComponent,
    EditTodoDialogComponent,
    AddTodoDialogComponent,
    ReactiveFormComponent,
    AggridComponent,
    ReactiveFormAgGridParentFormComponent,
    AgGridTableComponent,
    AgGridGroupedComponent,
    AgGridEditableComponent,
    ReactiveFormServiceComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    AgGridModule,
    RouterModule,
    FormsModule,
    MatSelectModule,
    NgxPaginationModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
