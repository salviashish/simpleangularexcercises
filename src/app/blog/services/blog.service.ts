import { Injectable } from '@angular/core';
import { InnerHttpClientService } from '../../modules/shared-service';
import { Observable } from 'rxjs'
import {HttpClient} from '@angular/common/http';

import { Post, Comment, User } from '../models';

@Injectable()
export class BlogService {
  blogPostAPIUrl:string = `https://jsonplaceholder.typicode.com/posts/`;
  userAPIUrl :string = `https://jsonplaceholder.typicode.com/users/`;
  commentsAPIUrl:string ='https://jsonplaceholder.typicode.com/comments/';
   

  constructor(private _innerHttpClient:InnerHttpClientService,private client:HttpClient) {
   }

  GetTopPost(limit:number):Observable<Post[]>{
    return this._innerHttpClient.get<Post[]>(`${this.blogPostAPIUrl}?_limit=${limit}`);
  }

  GetPost(postId:number):Observable<Post>{
    return this._innerHttpClient.get<Post>(`${this.blogPostAPIUrl}${postId}`);
  }

  GetUser(userId:number):Observable<User>{
    return this._innerHttpClient.get<User>(`${this.userAPIUrl}${userId}`);
  }

  GetComments(postId:number):Observable<Comment[]>{
    return this._innerHttpClient.get<Comment[]>(`${this.blogPostAPIUrl}${postId}/comments`);
  }

  PostComment(comment:Comment)
  {
    return this._innerHttpClient.post(this.commentsAPIUrl,comment);
  }
}