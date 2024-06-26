import { Injectable } from '@angular/core';
import { Service } from './service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceAgReacService {

  private dataSubject = new BehaviorSubject<Service[]>(this.getDataFromLocalStorage());

  getData(): Observable<Service[]> {
    return this.dataSubject.asObservable();
  }

  addData(newData: Omit<Service, 'id'>): void {
    const currentData = this.getDataFromLocalStorage();
    const nextId = this.getNextId(currentData);
    const dataWithId = { ...newData, id: nextId };
    currentData.push(dataWithId);
    localStorage.setItem('servicesData', JSON.stringify(currentData));
    this.dataSubject.next(currentData);
  }

  deleteData(ids: number[]): void {
    let currentData = this.getDataFromLocalStorage();
    currentData = currentData.filter(item => !ids.includes(item.id));
    localStorage.setItem('servicesData', JSON.stringify(currentData));
    this.dataSubject.next(currentData);
  }

  private getDataFromLocalStorage(): Service[] {
    return JSON.parse(localStorage.getItem('servicesData') || '[]');
  }

  private getNextId(data: Service[]): number {
    if (data.length === 0) {
      return 1;
    }
    const maxId = Math.max(...data.map(item => item.id));
    return maxId + 1;
  }
}
