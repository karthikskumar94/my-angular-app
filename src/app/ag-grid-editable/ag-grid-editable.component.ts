import { Component, OnInit } from '@angular/core';
import { DataServiceAgReacService } from '../data-service-ag-reac.service';
import { Service } from '../service';
import { ColDef, ColGroupDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ag-grid-editable',
  templateUrl: './ag-grid-editable.component.html',
  styleUrls: ['./ag-grid-editable.component.css']
})
export class AgGridEditableComponent{
  columnDefs: (ColDef<Service, any> | ColGroupDef<Service>)[] = [
    {headerCheckboxSelection: true, checkboxSelection: true, headerName: 'Select', width: 50},
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Service ID', field: 'serviceId', sortable: true, filter: true },
    { headerName: 'Service Name', field: 'serviceName', sortable: true, filter: true },
    { headerName: 'Service Description', field: 'serviceDescription', sortable: true, filter: true },
    { headerName: 'Service Endorsement', field: 'serviceEndorsement', sortable: true, filter: true, valueFormatter: (params: { value:any; }) => params.value?'True':'False' },
    { headerName: 'Service Expiry', field: 'serviceExpiry', sortable: true, filter: true }
  ];

  rowData!: Service[];
  private gridColumnApi!: ColumnApi;
  private gridApi!: GridApi<any>;

  constructor(private dataService: DataServiceAgReacService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(data => {
      this.rowData = data;
    });
  }

  onAdd(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: { id: '', serviceId: '', serviceName: '', serviceDescription: '', serviceEndorsement: false, serviceExpiry: '' }
    });

    dialogRef.afterClosed().subscribe((result: Omit<Service, "id">) => {
      if (result) {
        this.dataService.addData(result);
        this.loadData();
      }
    });
  }

  onDelete(): void {
    const selectedNodes=this.gridApi.getSelectedNodes();
    const selectedData=selectedNodes.map(node => node.data as Service);
    const selectedIds=selectedData.map(row=>row.id);

    this.dataService.deleteData(selectedIds);
    this.loadData();
  }

  onGridReady(params: GridReadyEvent): void{
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    console.log(params);
  }

}
