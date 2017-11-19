import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Headers, Http} from "@angular/http";

import * as globals from './app.globals';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from "./user";
import {Blog} from "./blog";
import {Post} from "./post";
import {Subject} from "rxjs/Subject";

// import {Blog} from "./blog";


@Injectable()
export class BlogService {

  public signedInBlogObservable$: Observable<Blog>;
  public dataPassingMedium = new Subject<Blog>();

  public blogUrl = globals.SERVER_BASE_URL + '/blogs';
  public header = {headers: new Headers({'Content-Type': 'application/json'})};

  post: Post;

  SignedInBlog: Blog;

  constructor(private http: Http) {
    this.signedInBlogObservable$ = this.dataPassingMedium.asObservable();
  }

  sendSignedInBlog(blog) {
    console.log('blog recieved at service: ');
    console.log(blog);
    this.SignedInBlog = blog;
    this.dataPassingMedium.next(blog);
  }


  // private user
  // SignedInBlog = new Blog('', '', new User('', '', '', false), new Date(-8640000000000000), '')

  // post = new Post(
  //     '5a0bed40b6b96546a4fec96a',
  //     'Popular on TV now!',
  //     '1. Stranger Things\n2. Mr. Robot\n3. American Horror Story: Roanoke\n4. The Walking Dead\n5. Bachelor in Paradise\n6. Pretty Little Liars\n7. Game of Thrones',
  //     'chall',
  //     new Date(0),
  //     0
  //   )
  //
  // SignedInBlog = new Blog(
  //     "poptv",
  //     "We chase everything, whether it is world news, sports, music, technology, economy , bla bla bla ...",
  //     "Chasing everything!",
  //     new User(
  //       "vincent" ,
  //       "qwerty123",
  //      "c@q.com",
  //       false
  //     ),
  //     new Date(-8640000000000000),
  //     "TV",
  //     [this.post]
  // )

  // post = new Post(
  //   '5a0bed40b6b96546a4fec96a',
  //   'Popular on TV now!',
  //   '1. Stranger Things\n2. Mr. Robot\n3. American Horror Story: Roanoke\n4. The Walking Dead\n5. Bachelor in Paradise\n6. Pretty Little Liars\n7. Game of Thrones',
  //   'chall',
  //   new Date(0),
  //   0
  // )

  saveSignedInBlog(blog) {
    localStorage.setItem('SignedInBlog1', JSON.stringify(blog));
  }

  retrieveSignedInBlog() {
    this.SignedInBlog = JSON.parse(localStorage.getItem('SignedInBlog1'));
    return this.SignedInBlog;
  }

  clearSignedInBlog() {
    localStorage.clear();
  }

  // getSignedInBlog() {
  //   return this.SignedInBlog;
  // }

  getBlogs(): Observable<Blog[]> {
    return this.http.get(this.blogUrl)
      .map((res) => res.json())
      .catch((err) => Observable.throw(err) || 'Server error');
  }

  addBlog(body) {
    // const headers      = new Headers({ 'Content-Type': 'application/json' });
    // const options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.blogUrl, body, this.header)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateBlog(body, blogname) {
    return this.http.put(this.blogUrl + '/' + blogname, body, this.header).map(res => res.json());
  }

  // http://localhost:3000/api/blogs/chall/following
  getFollowing(blogname) {
    return this.http.get(this.blogUrl + '/' + blogname + '/following', this.header).map(res => res.json());
  }

  getBlogByName(blogname): Observable<Blog> {
    return this.http.get(this.blogUrl + '/' + blogname).map(res => res.json());
  }

  getPostsByBlogName(blogname): Observable<Post[]> {
    return this.http.get(this.blogUrl + '/' + blogname + '/blogposts').map(res => res.json());
  }

  addPost(postObj: Post): Observable<Post> {
    return this.http.post(globals.SERVER_BASE_URL + '/blogposts', postObj, this.header)
      .map((res) => res.json(), this.header)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  editPost(postObj: Post): Observable<Post> {
    return this.http.put(globals.SERVER_BASE_URL + '/blogposts/' + postObj.id, postObj, this.header)
      .map((res) => res.json(), this.header)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }




}
