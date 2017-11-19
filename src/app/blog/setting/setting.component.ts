import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../blog.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Blog} from "../../blog";
import {User} from "../../user";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router, private formBuilder: FormBuilder) { }

  settingForm: FormGroup;
  blog: Blog;
  properties = [];
  labels = ['Title', 'About', 'Username', 'Password'];
  indices = [0, 1, 2, 3];


  ngOnInit() {
    this.settingForm = this.formBuilder.group({
      Title: '',
      About: '',
      Username:  '',
      Password: ''
    });

    this.blog = this.blogService.retrieveSignedInBlog();
    console.log("current blog: ")
    console.log(this.blog);
    this.properties = [this.blog.title,
      this.blog.about, this.blog.user.username,
      this.blog.user.password];
  }

  onSaveClicked(e) {
    e.preventDefault();

    const about = this.settingForm.get('About').value;
    const title = this.settingForm.get('Title').value;
    const username = this.settingForm.get('Username').value;
    const password = this.settingForm.get('Password').value;


    this.blogService.updateBlog({
      title: title, about: about, newFollowing: '',
      username: username, password: password
    }, this.blog.name)
      .subscribe((data) => {
        console.log(this.blog);
        this.router.navigateByUrl('/blog/' + this.blog.name);
        console.log("updated blog!");
        console.log(data);
      });
  }

}
