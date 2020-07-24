import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import * as fromServices from '.';
import { InnerHttpClientService } from './inner-http-client.service';
import { InnerHttpInterceptorService } from './inner-http-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedServiceModule {

  static forRoot(): ModuleWithProviders<SharedServiceModule>{
    return{
      ngModule: SharedServiceModule,
      providers:[
        InnerHttpClientService,
        {
          provide: HTTP_INTERCEPTORS,useClass:InnerHttpInterceptorService,multi:true
        }
      ]
    };
  }
 }