import { Component, OnInit,Input } from '@angular/core';
import { BlogService } from '../services/blog.service';
import{ Post,Comment } from '../models'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post;
  comments:Comment[]
  constructor(private blogService:BlogService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parameters=>{
      this.getPostDetail(parameters.id);
      this.LoadComments(parameters.id);
    });
    //this.getPostDetail(1);
  }

  getPostDetail(postId:number)
  {
    this.blogService.GetPost(postId).subscribe(post=>{
      this.post = post;
    });
  }

  LoadComments(postId:number){
    this.blogService.GetComments(postId).subscribe(comments=>
      {
        console.log(comments)
        this.comments = comments.sort(function(first,second){
          return second.id - first.id
        })
      }
    );
  }

  PostComment(comment:Comment){
    comment.postId = this.post.id;
    //comment.id = this.comments[0].id+1;
    this.blogService.PostComment(comment).subscribe(
      response=>{
        console.log(response)
        this.comments.unshift(comment)
      },
      error=>console.error(error)
    )
  }
}