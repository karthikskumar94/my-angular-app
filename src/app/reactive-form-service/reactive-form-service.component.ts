import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceAgReacService } from '../data-service-ag-reac.service';

@Component({
  selector: 'app-reactive-form-service',
  templateUrl: './reactive-form-service.component.html',
  styleUrls: ['./reactive-form-service.component.css']
})
export class ReactiveFormServiceComponent implements OnInit{
  form!: FormGroup;
  idCounter = 1;

  constructor(private fb: FormBuilder, private dataServiceAgRe: DataServiceAgReacService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [{ value: '', disabled: true }],
      serviceId: ['', Validators.required],
      serviceName: ['', Validators.required],
      serviceDescription: ['', Validators.required],
      serviceEndorsement: [false],
      serviceExpiry: ['', Validators.required]
    });

    // Load the current ID counter from local storage
    const storedCounter = localStorage.getItem('idCounter');
    if (storedCounter) {
      this.idCounter = parseInt(storedCounter, 10);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      formData.id = this.idCounter++;
      localStorage.setItem('idCounter', this.idCounter.toString());

      this.dataServiceAgRe.addData(formData);
      this.form.reset();
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsPristine();
        this.form.get(key)?.markAsUntouched();
        this.form.get(key)?.updateValueAndValidity();
      });
      alert('Data submitted successfully!');
    }
  }

}
