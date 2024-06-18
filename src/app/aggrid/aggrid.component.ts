import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent implements OnInit {

  columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Employee ID', field: 'employeeId', sortable: true, filter: true },
    { headerName: 'Employee Name', field: 'employeeName', sortable: true, filter: true },
    { headerName: 'Employee Designation', field: 'employeeDesignation', sortable: true, filter: true },
    { headerName: 'Employee Company', field: 'employeeCompany', sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/Data/data-ag.json')
      .subscribe(data => {
        this.rowData = data;
      });
  }

}
