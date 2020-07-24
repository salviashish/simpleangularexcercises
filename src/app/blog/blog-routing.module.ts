import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import{ IndexComponent } from './index/index.component';
import{ PostComponent } from './post/post.component';
import{ CommentsComponent } from './comments/comments.component';

const routes = [
  { path:'',component: IndexComponent},
  { path:'post/:id', component: PostComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class BlogRoutingModule{}