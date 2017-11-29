import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as globals from '../app.globals';
import {BlogService} from "../blog.service";
import {Blog} from "../blog";
import {Observable} from "rxjs/Observable";
import {User} from "../user";
import {Router} from "@angular/router";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit{

  signinForm: FormGroup;
  private signinUrl = globals.SERVER_BASE_URL + '/blogs';


  constructor(private formBuilder: FormBuilder,
              private blogService: BlogService,
              private router: Router) {}


  public userNotFound: Boolean;
  private  users: User [];
  private blogs: Blog [];
  public username_or_email: String;
  public blog: Blog;

  @Output()
  onSignIn: EventEmitter<Blog> = new EventEmitter<Blog>();



  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username_email: '',
      password: ''
    });

    this.getBlogs();

    // send data to service so that each component can use this data

  }

  getBlogs() {
    this.users = [];
    this.blogService.getBlogs()
      .subscribe((data) => {

        this.blogs = data;
        // for (let blog of data) {
        //   this.users.push(blog.user);
        // }


      });
  }

  submitSignIn(e) {
    e.preventDefault();
    // console.log(this.signinForm.get('username_email').value);
    const username_email = {
      value: this.signinForm.get('username_email').value,
      isEmail: false
    };

    username_email.isEmail = username_email.value.split('@').length > 1;

    const password = this.signinForm.get('password').value;

    const result = this.blogs.filter(function (blog) {
      if (username_email.isEmail) {
        return (username_email.value == blog.user.email) && (password == blog.user.password);

      }
      else {
        return (username_email.value == blog.user.username) && (password == blog.user.password);
      }
    });

    if (result.length > 0) {
        // this.blogService.SignedInBlog = result[0];
        // this.blogService.setSignedInBlog(result[0]);
      this.blog = result[0];

      // sessionStorage.setItem('SignedInBlog', JSON.stringify(this.blog));
      this.blogService.saveSignedInBlog(this.blog);
      // let personFromStorage = JSON.parse(localStorage.getItem('person')) as Person;

      this.userNotFound = false;
      console.log('nav to dashboard ...');
      console.log(this.blogService.SignedInBlog);
      this.blogService.sendSignedInBlog(this.blog);

      this.router.navigateByUrl('dashboard');
      // window.location.reload();
    }
    else {
      this.userNotFound = true;
    }

    this.username_or_email = (username_email.isEmail) ? 'Email' : 'Username';

    // this.blogService.setSi;
    // this.onSignIn.emit(this.blogService.SignedInBlog);

  }




}
