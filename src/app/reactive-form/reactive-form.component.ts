import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  countries = ['United States', 'Ireland', 'United Kingdom', 'Australia', 'Sri Lanka'];
  showToast=false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      description: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.showToast=true;
      setTimeout(()=> {
        this.hideToast();
      }, 10000);
      this.form.reset();
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key)?.markAsPristine();
        this.form.get(key)?.markAsUntouched();
        this.form.get(key)?.updateValueAndValidity();
      });
    }
  }

  hideToast():void{
    this.showToast=false;
  }

  getErrorMessage(field: string): string {
    const control = this.form.get(field);
    if (control?.hasError('required')) {
      return 'This field is required'
    }
    if (control?.hasError('email')) {
      return 'Not a valid email';
    }
    if (control?.hasError('pattern')) {
      return 'Phone number must be 10 digits';
    }
    return '';
  }
}
