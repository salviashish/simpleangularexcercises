import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import * as fromCompoments from '.';
import { BlogService } from './services/blog.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,BlogRoutingModule,ReactiveFormsModule
  ],
  providers:[BlogService],
  declarations: [...fromCompoments.components]
})
export class BlogModule {
  static forChild() : ModuleWithProviders<BlogModule>{
    return{
      ngModule: BlogModule,
      providers:[
        BlogService
      ]
    };
  }
 }