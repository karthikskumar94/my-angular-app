import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { RoleComponent } from './role/role.component';
import { AdminComponent } from './admin/admin.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import { AggridComponent } from './aggrid/aggrid.component';
import { ReactiveFormAgGridParentFormComponent } from './reactive-form-ag-grid-parent-form/reactive-form-ag-grid-parent-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
const routes: Routes = [
  //{path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'role', component: RoleComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'reactiveform', component: ReactiveFormComponent},
  {path: 'aggrid', component: AggridComponent},
  {path: 'reactive-ag', component: ReactiveFormAgGridParentFormComponent},
  {path: 'dynamic-form', component: DynamicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
