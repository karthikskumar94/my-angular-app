import { Component, OnInit } from '@angular/core';
import { DataServiceAgReacService } from '../data-service-ag-reac.service';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})
export class AgGridTableComponent implements OnInit {

  columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Service ID', field: 'serviceId', sortable: true, filter: true },
    { headerName: 'Service Name', field: 'serviceName', sortable: true, filter: true },
    { headerName: 'Service Description', field: 'serviceDescription', sortable: true, filter: true },
    { headerName: 'Service Endorsement', field: 'serviceEndorsement', sortable: true, filter: true },
    { headerName: 'Service Expiry', field: 'serviceExpiry', sortable: true, filter: true }
  ];

  rowData!: any[];

  constructor(private da: DataServiceAgReacService) { }

  ngOnInit(): void {
    this.da.getData().subscribe(data => {
      this.rowData = data;
    });
    this.loadData();
  }

  loadData(): void {
    this.da.getData().subscribe(data => {
      this.rowData = data;
    })
  }
}
