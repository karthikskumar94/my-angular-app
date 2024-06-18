import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data!: string;

  setData(value: string){
    this.data=value;
  }

  getData(): string{
    return this.data;
  }
}