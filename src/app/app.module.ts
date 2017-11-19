import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import {routing} from './app.routes';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BlogService} from "./blog.service";
import {HttpModule} from "@angular/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExploreComponent } from './explore/explore.component';
import { BlogComponent } from './blog/blog.component';
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import { AddPostComponent } from './blog/add-post/add-post.component';
import { SettingComponent } from './blog/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ExploreComponent,
    BlogComponent,
    AddPostComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})

export class AppModule { }
