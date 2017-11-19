import { RouterModule, Routes } from '@angular/router';
import {GetStartedComponent} from './get-started/get-started.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ExploreComponent} from "./explore/explore.component";
import {BlogComponent} from "./blog/blog.component";
import {AddPostComponent} from "./blog/add-post/add-post.component";
import {SettingComponent} from "./blog/setting/setting.component";


const routes: Routes = [
  { path: '', component: GetStartedComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'blog/:blogname', component: BlogComponent},
  { path: 'blog/:blogname/addpost', component: AddPostComponent},
  { path: 'blog/:blogname/setting', component: SettingComponent}
];

export const routing = RouterModule.forRoot(routes);
