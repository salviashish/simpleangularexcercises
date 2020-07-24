import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { BlogService } from '../services/blog.service';
import { tap,map  } from 'rxjs/operators'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  blogService: BlogService
  posts:Post[];

  constructor(private bService:BlogService) { 
    this.blogService = bService;
  }

  ngOnInit() {
    this.GetTopXPosts();
  }

  GetTopXPosts(){
    const limit = 9;

    console.log('fetching blog posts');

    this.blogService.GetTopPost(limit)
      .pipe(
        map(posts=>posts.map(post=>
          {
            this.blogService.GetUser(post.userId).pipe(map(user=>post.author = user.name))
            return post;
          }
        ))
      )
      .subscribe(posts=>{
        this.posts = posts;
        console.log(this.posts);
      });
  }
}