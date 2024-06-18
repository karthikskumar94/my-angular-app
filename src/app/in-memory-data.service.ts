import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  private jsonUrl='assets/Data/data.json';
  private services: any[]=[];

  constructor(private http: HttpClient) { 
    this.loadInitialData();
  }

  private loadInitialData(): void{
    this.http.get<any>(this.jsonUrl).pipe(
      tap(data => {
        if(Array.isArray(data)) {
          this.services=data;
        } else {
          console.error('Initial data is not an array:', data)
        }
      } )
    )
  }

  getData(): Observable<any[]>{
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      alert(res.message);
  })
  return of(this.services);
  }

  addData(service: any): Observable<any>{
    this.http.get(this.jsonUrl).subscribe((res: any) =>{
    alert(res.message);    
    this.services.push(service);
  })
    return of(service);
  }

  updateData(service: any): Observable<any>{
    this.http.put(this.jsonUrl, this.services).subscribe((res: any) =>{
    const index=this.services.findIndex(s => s.serviceCode === service.serviceCode);
    if(index !== -1){
      alert(res.message);
      this.services[index]=service;
    }
  })
    return of(service);
  }

  deleteData(serviceCode: string): Observable<any>{
    this.http.delete(this.jsonUrl).subscribe((res: any) =>{
    this.services=this.services.filter(s => s.serviceCode!== serviceCode);
  })
  return of({});
 } 
}