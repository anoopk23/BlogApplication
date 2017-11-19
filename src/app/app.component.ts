import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BlogService} from "./blog.service";
import {Blog} from "./blog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private router: Router , private blogService: BlogService) { }

  blog: Blog;

  ngOnInit() {

    // your logic to know if its my home page.
    // this.blogService.setSignedInBlog()
    this.blog = this.blogService.retrieveSignedInBlog();
    console.log(this.blog);

    // this.blog = this.blogService.SignedInBlog;
    // this.blogService.signedInBlogObservable$.subscribe((blog) => {
    //   this.blog = blog;
    //   console.log("In subscribed: ");
    //   console.log(this.blog);
    // });

  }

  navBarVisible() {
    const hideNavBar = (this.router.url == ''
      || this.router.url == '/'
      || this.router.url == '/sign-in'
      || this.router.url ==  '/sign-up'
      || this.router.url ==  '/get-started') ;
    // console.log(this.router.url + ': ' + hideNavBar);
    return !hideNavBar;
  }

  showMakePost() {
    const showMakePost = (this.router.url ==  '/blog/' + this.blog.name) ;
    return showMakePost;
  }

  updateSignedInBlog(blog: Blog) {
    console.log('updating signed in blog ...');
    this.blogService.SignedInBlog = blog;
    this.blog = blog;
    console.log('done!!');
    console.log(this.blogService.SignedInBlog);
  }

  logout() {
    this.blogService.clearSignedInBlog();
  }


}
