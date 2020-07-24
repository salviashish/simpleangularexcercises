import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Comment } from '../models';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments:Comment[]
  @Output() postComment = new EventEmitter<Comment>();

  comment: Comment;
  commentsForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.commentsForm = fb.group({
      commentText:[null,Validators.required]
    })
   }

  ngOnInit() {
  }

  PostComment()
  {
    this.comment ={
      name: 'Anonymous',
      email: 'Anonymous@randommail.com',
      body: this.commentsForm.get('commentText').value 
    };
    this.postComment.emit(this.comment);
  }
}