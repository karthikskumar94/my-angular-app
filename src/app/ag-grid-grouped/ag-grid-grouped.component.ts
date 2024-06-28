import { Component, OnInit } from '@angular/core';
import { DataServiceAgReacService } from '../data-service-ag-reac.service';
import { Service } from '../service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-grouped',
  templateUrl: './ag-grid-grouped.component.html',
  styleUrls: ['./ag-grid-grouped.component.css']
})


export class AgGridGroupedComponent implements OnInit {
  columnDefs: (ColDef<Service, any> | ColGroupDef<Service>)[]  = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Service ID', field: 'serviceId', sortable: true, filter: true },
    { headerName: 'Service Name', field: 'serviceName', sortable: true, filter: true, rowGroup: true, hide: true },
    { headerName: 'Service Description', field: 'serviceDescription', sortable: true, filter: true },
    { headerName: 'Service Endorsement', field: 'serviceEndorsement', sortable: true, filter: true, valueFormatter: (params: { value:any; }) => params.value?'True':'False'},
    { headerName: 'Service Expiry', field: 'serviceExpiry', sortable: true, filter: true }
  ];

  autoGroupColumnDef: ColDef<Service, any> = {
    headerName: 'Service Name',
    field: 'serviceName',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      innerRenderer: 'customCellRenderer'
    }
  };

  rowData!: Service[];

  constructor(private dataService: DataServiceAgReacService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.rowData = data;
    });
  }
}
