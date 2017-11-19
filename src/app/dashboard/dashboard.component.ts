import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Observable} from "rxjs/Observable";
import {Blog} from "../blog";
import {Post} from "../post";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private blogService: BlogService) { }

  blog: Blog;
  blogFollowing: Blog[];
  postsToShow: Post[];

  ngOnInit() {
    this.getFollowing();
    //
    // const post: Post = this.blogFollowing[0].blogPosts[0];
    // post.

  }

  getFollowing() {
    this.blogService.signedInBlogObservable$.subscribe((blog) => {
      this.blog = blog;

      this.blogService.getFollowing(this.blog.name)
        .subscribe((data) => {
          this.blogFollowing = data;
          const all_posts = [];
          for(let i = 0; i < data.length; i ++) {
            for(let j = 0; j < data[i].blogPosts.length; j ++) {
              all_posts.push(data[i].blogPosts[j]);
            }
          }

          this.postsToShow = all_posts.sort((post1, post2) => post2.date - post1.date);
          // console.log(this.postsToShow[0].blog);
        });
    });
  }



}
