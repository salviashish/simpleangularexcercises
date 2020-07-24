import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedServiceModule } from './shared-service.module';

@Injectable({
  providedIn: SharedServiceModule,
})
export class InnerHttpClientService {
  constructor(private _client:HttpClient){}

  get<T>(url: string,options?: {headers?: HttpHeaders|{[header: string]: string | string[]}}): Observable<T>;
  get(url: string,options?: {headers?: HttpHeaders|{[header: string]: string | string[]}}): Observable<string>;
  get(url: string,options: {headers?: HttpHeaders|{[header: string]: string | string[]}} = {}): Observable<any>
  {
    return this._client.get<any>(url,options as any);
  }

  post<T>(url: string, body: any|null, options?: {headers?: HttpHeaders|{[header: string]: string | string[]}}): Observable<T>;
  post(url: string, body: any|null, options?: {headers?: HttpHeaders|{[header: string]: string | string[]}}): Observable<Object>;
  post(url: string, body: any|null, options?: {headers?: HttpHeaders|{[header: string]: string | string[]}}): Observable<string>;
  post(url: string, body: any|null, options: {headers?: HttpHeaders|{[header: string]: string | string[]}} = {}): Observable<any> 
  {
    console.log('Options for Post : '+JSON.stringify(options));
    return this._client.post<any>(url,body,options as any);
  }
}