import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { DataService } from '../data.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  serviceForm!: FormGroup;
  services: any[] = [];
  editingIndex: number | null = null;
  apiurl = 'assets/Data/data.json';

  svcLineOptions: string[] = [
    'Administrative.Support',
    'Assessment Services',
    'Management System Certification',
    'Product Awareness',
    'Supply Chain Management'
  ];


  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.serviceForm = this.fb.group({
      serviceCode: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      frequency: new FormControl('', [Validators.pattern('^[0-9]*$')]),
      description: new FormControl(''),
      languageQualification: new FormControl(false),
      svcLine: new FormControl('', Validators.required)
    });
    this.loadServices();
  }

  loadServices(): void {
    this.dataService.getData().subscribe(data => {
      this.services = data;
    });
  }

  onSubmit() {
    if(this.serviceForm.valid){
      const payload= this.serviceForm.value;
      if(this.editingIndex!==null){
        this.services[this.editingIndex]=payload;
        this.editingIndex=null;
      } else {
        this.services.push(payload);
      }
      this.serviceForm.reset();
      this.dataService.updateData(this.services).subscribe(() => {
        this.serviceForm.reset({
          serviceCode:'',
          name: '',
          frequency:'',
          description:'',
          languageQualification:false,
          svcLine:''    
        });
        this.loadServices();
      });
    }
  }

  onDelete(index: number) {
    this.services.splice(index, 1);
    this.dataService.updateData(this.services).subscribe(() => {
      this.loadServices();
    });
  }

  onEdit(index: number) {
    this.editingIndex = index;
    this.serviceForm.setValue(this.services[index]);
  }

  isEditing(index: number): boolean {
    return this.editingIndex === index;
  }

  onSave(index: number) {
    if(this.serviceForm.valid){
      this.services[index]=this.serviceForm.value;
      this.editingIndex=null;
      this.dataService.updateData(this.services).subscribe(() => {
        this.loadServices();
      });
    }
  }

  onCancel() {
    this.editingIndex = null;
    this.loadServices();
  }


  getServiceControl(controlName: string): FormControl {
    return this.serviceForm.get(controlName) as FormControl;
  }
}
