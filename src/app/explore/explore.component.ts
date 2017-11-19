import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Blog} from "../blog";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  categoryWiseBlogs: {[category: string]: Blog[]};
  blogs: Blog[];
  categories: String[];

  ngOnInit() {
    this.getBlogs();
    // this.getPosts();
  }

  getBlogs() {

    this.categoryWiseBlogs = {
      'Technology': [],
      'Music': [],
      'Celebrity': [],
      'TV': [],
      'Fun': []
    };

    this.categories = ['Technology', 'Music', 'Celebrity', 'TV', 'Fun'];
    // categoryWiseBlogs['']


    this.blogService.getBlogs()
      .subscribe((blogs) => {
        this.blogs = blogs;
        for (let i = 0; i < blogs.length; i ++) {
          const category = blogs[i].category as string;
          this.categoryWiseBlogs[category].push(blogs[i]);
        }
        // categoryWiseBlogs
      });

  }
}
