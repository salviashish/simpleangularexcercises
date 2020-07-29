import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route  } from '@angular/router';

import { StandardFormComponent } from './standard-form/standard-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DirtyCheckGuard } from './modules/shared-service/dirty-check.guard';

const routes=[
  { path:'',component:StandardFormComponent },
  { path:'standard',component:StandardFormComponent },
  { path:'reactive',component:ReactiveFormComponent,canDeactivate:[DirtyCheckGuard] },
  { path:'lazyloadblog', loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)}
]

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule{
}