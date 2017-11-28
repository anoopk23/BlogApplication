webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.nav.navbar-nav.navbar-right li a {\r\n  color: white;\r\n}\r\n\r\n.nav.navbar-nav.navbar-right li a:hover,\r\n.nav.navbar-nav.navbar-right li a:focus,\r\n.nav.navbar-nav.navbar-right li a:after,\r\n.navbar-default .navbar-nav .dropdown .dropdown-toggle:focus,\r\n.navbar-default .navbar-nav .dropdown .dropdown-toggle:hover\r\n.navbar-default .navbar-nav .dropdown .dropdown-toggle > a:after\r\n{\r\n  color: white !important;\r\n  background-color:  #2a4459 !important;\r\n}\r\n\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover{\r\n  background-color: #2a4459;\r\n}\r\n\r\n.navbar-nav > li > .dropdown-menu { background-color: #21334f; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top \"  style=\"padding: 0px;border-bottom: 1px solid #596f8e  !important; \" *ngIf=\"navBarVisible()\">\r\n  <div class=\"container-fluid set-background\" >\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header \">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\" style=\"color: white\">CORE</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n\r\n        <li *ngIf=\"showMakePost()\"><a [routerLink]=\"['/blog/'+blog.name+'/addpost']\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\" ></span> Make a post</a></li>\r\n        <li><a routerLink=\"/dashboard\"><span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span> Dashboard</a></li>\r\n        <li><a routerLink=\"/explore\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span> Explore</a></li>\r\n\r\n        <li class=\"dropdown\">\r\n          <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> {{blog.user.username}}</a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a  [routerLink]=\"'/blog/'+blog.name\"><span class=\"glyphicon glyphicon-user\"></span> {{blog.name}}</a></li>\r\n            <li><a [routerLink]=\"'/blog/'+blog.name+'/setting'\"><span class=\"fa fa-cog\" style=\"font-size: 20px\"></span> Settings</a></li>\r\n            <li><a href=\"\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, blogService) {
        this.router = router;
        this.blogService = blogService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
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
    };
    AppComponent.prototype.navBarVisible = function () {
        var hideNavBar = (this.router.url == ''
            || this.router.url == '/'
            || this.router.url == '/sign-in'
            || this.router.url == '/sign-up'
            || this.router.url == '/get-started');
        // console.log(this.router.url + ': ' + hideNavBar);
        return !hideNavBar;
    };
    AppComponent.prototype.showMakePost = function () {
        var showMakePost = (this.router.url == '/blog/' + this.blog.name);
        return showMakePost;
    };
    AppComponent.prototype.updateSignedInBlog = function (blog) {
        console.log('updating signed in blog ...');
        this.blogService.SignedInBlog = blog;
        this.blog = blog;
        console.log('done!!');
        console.log(this.blogService.SignedInBlog);
    };
    AppComponent.prototype.logout = function () {
        this.blogService.clearSignedInBlog();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_BASE_URL; });
var SERVER_BASE_URL = 'https://mighty-coast-42924.herokuapp.com/api';
//# sourceMappingURL=app.globals.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_started_get_started_component__ = __webpack_require__("../../../../../src/app/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__explore_explore_component__ = __webpack_require__("../../../../../src/app/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blog_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/blog/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blog_setting_setting_component__ = __webpack_require__("../../../../../src/app/blog/setting/setting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__get_started_get_started_component__["a" /* GetStartedComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__explore_explore_component__["a" /* ExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_12__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__blog_add_post_add_post_component__["a" /* AddPostComponent */],
            __WEBPACK_IMPORTED_MODULE_15__blog_setting_setting_component__["a" /* SettingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__blog_service__["a" /* BlogService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_started_get_started_component__ = __webpack_require__("../../../../../src/app/get-started/get-started.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__explore_explore_component__ = __webpack_require__("../../../../../src/app/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/blog/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_setting_setting_component__ = __webpack_require__("../../../../../src/app/blog/setting/setting.component.ts");









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__get_started_get_started_component__["a" /* GetStartedComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_5__explore_explore_component__["a" /* ExploreComponent */] },
    { path: 'blog/:blogname', component: __WEBPACK_IMPORTED_MODULE_6__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'blog/:blogname/addpost', component: __WEBPACK_IMPORTED_MODULE_7__blog_add_post_add_post_component__["a" /* AddPostComponent */] },
    { path: 'blog/:blogname/setting', component: __WEBPACK_IMPORTED_MODULE_8__blog_setting_setting_component__["a" /* SettingComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {Blog} from "./blog";
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.dataPassingMedium = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.blogUrl = __WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* SERVER_BASE_URL */] + '/blogs';
        this.header = { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' }) };
        this.signedInBlogObservable$ = this.dataPassingMedium.asObservable();
    }
    BlogService.prototype.sendSignedInBlog = function (blog) {
        console.log('blog recieved at service: ');
        console.log(blog);
        this.SignedInBlog = blog;
        this.dataPassingMedium.next(blog);
    };
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
    BlogService.prototype.saveSignedInBlog = function (blog) {
        localStorage.setItem('SignedInBlog1', JSON.stringify(blog));
    };
    BlogService.prototype.retrieveSignedInBlog = function () {
        this.SignedInBlog = JSON.parse(localStorage.getItem('SignedInBlog1'));
        return this.SignedInBlog;
    };
    BlogService.prototype.clearSignedInBlog = function () {
        localStorage.clear();
    };
    // getSignedInBlog() {
    //   return this.SignedInBlog;
    // }
    BlogService.prototype.getBlogs = function () {
        return this.http.get(this.blogUrl)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err) || 'Server error'; });
    };
    BlogService.prototype.addBlog = function (body) {
        // const headers      = new Headers({ 'Content-Type': 'application/json' });
        // const options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.blogUrl, body, this.header)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    BlogService.prototype.updateBlog = function (body, blogname) {
        return this.http.put(this.blogUrl + '/' + blogname, body, this.header).map(function (res) { return res.json(); });
    };
    // http://localhost:3000/api/blogs/chall/following
    BlogService.prototype.getFollowing = function (blogname) {
        return this.http.get(this.blogUrl + '/' + blogname + '/following', this.header).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getBlogByName = function (blogname) {
        return this.http.get(this.blogUrl + '/' + blogname).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getPostsByBlogName = function (blogname) {
        return this.http.get(this.blogUrl + '/' + blogname + '/blogposts').map(function (res) { return res.json(); });
    };
    BlogService.prototype.addPost = function (postObj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* SERVER_BASE_URL */] + '/blogposts', postObj, this.header)
            .map(function (res) { return res.json(); }, this.header)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    BlogService.prototype.editPost = function (postObj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_globals__["a" /* SERVER_BASE_URL */] + '/blogposts/' + postObj.id, postObj, this.header)
            .map(function (res) { return res.json(); }, this.header)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BlogService);

var _a;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-post-container {\r\n  margin-top: 100px;\r\n  background-color: #ededed;\r\n  border-radius: 10px !important;\r\n  margin-bottom: 100px;\r\n\r\n}\r\n\r\n.form-post {\r\n  margin: 20px 20px;\r\n  /*text-align: center;*/\r\n}\r\n\r\n.form-post-heading {\r\n  margin: 30px 0;\r\n  /*border: 2px solid red;*/\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n\r\n.form-post input, .form-post-textarea {\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15), 0 1px 1px 0 rgba(0, 0, 0, 0.15) !important;\r\n\r\n}\r\n\r\n.drop-shadow {\r\n  /*border: 1px solid rgba(0, 0, 0, 0.19);*/\r\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.15) !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid  col-md-8 col-md-offset-2 form-post-container\">\n\n  <form [formGroup]=\"blogPostForm\" class=\"form-post\" >\n    <div class=\"form-post-heading col-md-12\">\n      <h1>Create a post</h1>\n    </div>\n    <div class=\"form-group \">\n      <div class=\"input-group col-md-12\">\n        <input formControlName=\"title\" class=\"form-control input-lg\" type=\"text\" placeholder=\"Enter Title here ...\" style=\"font-size: 15px; \"/>\n      </div>\n    </div>\n\n    <div class=\"form-group \">\n      <div class=\"input-group col-md-12\">\n        <textarea class=\"form-post-textarea\" [froalaEditor]=\"options\"  formControlName=\"content\" style=\"font-size: 15px\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"text-center btn-group-lg\">\n      <button class=\"btn btn-primary btn-block \" (click)=\"submitPost($event)\">Submit</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post__ = __webpack_require__("../../../../../src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = (function () {
    function AddPostComponent(blogService, router, route, formBuilder) {
        this.blogService = blogService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    AddPostComponent.prototype.ngOnInit = function () {
        this.blogPostForm = this.formBuilder.group({
            title: '',
            content: '',
        });
        this.getBlog();
        this.options = {
            // placeholder: 'Edit Me',
            height: 300,
            placeholderText: 'Edit your content here ...',
            htmlAllowedStyleProps: ['font-family', 'font-size', 'background', 'color',
                'width', 'text-align', 'vertical-align', 'background-color'],
            imageUploadURL: 'http://localhost:3000/image_upload',
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
                'quote', '-', 'insertLink', 'insertImage', 'embedly', 'insertTable', '|',
                'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
                'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
            imageUploadParams: {
                id: 'my_editor'
            },
            events: {
                // 'froalaEditor.focus': function (e, editor) {
                //   // Do something here.
                //   console.log(editor);
                // },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    // Do something here.
                    console.log(images);
                },
                'froalaEditor.image.uploaded': function (e, editor, resp) {
                    console.log("response:" + resp.toString());
                },
                'froalaEditor.image.error': function (e, editor, error, response) {
                    console.log(response);
                    console.log(error);
                }
            },
            // Set request type.
            imageUploadMethod: 'POST',
        };
    };
    AddPostComponent.prototype.getBlog = function () {
        var _this = this;
        var blogname = '';
        this.route.params.subscribe(function (params) {
            blogname = params['blogname'];
        });
        this.blogService.getBlogByName(blogname)
            .subscribe(function (blogWithUser) {
            _this.blog = blogWithUser;
        });
    };
    AddPostComponent.prototype.submitPost = function (event) {
        event.preventDefault();
        console.log('Submit pressed!');
        var title = this.blogPostForm.get('title').value;
        var content = this.blogPostForm.get('content').value;
        var post = new __WEBPACK_IMPORTED_MODULE_4__post__["a" /* Post */]('', title, content, this.blog.name);
        this.blogService.addPost(post)
            .subscribe(function (p) {
            post = p;
            console.log(post);
        });
        console.log('exit');
        // this.router.navigateByUrl(globals.SERVER_BASE_URL + '/blogs/' + this.blogService.SignedInBlog.name );
    };
    return AddPostComponent;
}());
AddPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-post',
        template: __webpack_require__("../../../../../src/app/blog/add-post/add-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/add-post/add-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], AddPostComponent);

var _a, _b, _c, _d;
// todo: edit in add-post 1(1 h) done!
// todo: sign-up 4(1)
// todo: likes 3(1.5)
// todo: favorite 6(2.5)
// todo: setting 2(2)
// todo: remake explore 5(2)
// todo: small left outs - logo-heading, log-out, gaurds, link on card-header-blog-name 7(2)
// todo: readme and github 8(1)
//# sourceMappingURL=add-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-link {\r\n  text-decoration: none;\r\n  font-weight: bolder;\r\n  color: black;\r\n}\r\n\r\n.custom-link:hover {\r\n  color: #777777;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p class=\"shift-down\" style=\"color: white\" xmlns=\"http://www.w3.org/1999/html\">-->\n  <!--{{blogPosts | json}}-->\n<!--</p>-->\n\n<div class=\"container-fluid col-md-5 col-md-offset-3 shift-down\">\n  <div class=\"row\" *ngFor=\"let post of blogPosts\">\n    <div class=\"card\" *ngIf=\"!showForm(post.id); else formBlock\">\n      <div  class=\"card-header\">\n        <a [routerLink]=\"'/blog/'+post.blog\" class=\"custom-link\">{{post.blog}}</a> <button  class=\"btn btn-sm col-md-offset-10\"   (click)=\"editPost(post.id)\" *ngIf=\"showEditButton(post.id)\"><i class=\"fa fa-pencil\"></i></button>\n        <a [routerLink]=\"'/blog/'+post.blog+'/'+post.id\"><small><i>{{post.date.toLocaleString()}}</i></small></a>\n      </div>\n      <div class=\"card-block\">\n        <h4 class=\"card-title\">{{post.title}}</h4>\n        <div class=\"card-text\" [innerHtml]=\"post.content\"></div>\n        <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n      </div>\n    </div>\n\n    <ng-template #formBlock>\n      <div class=\"card\" >\n        <form [formGroup]=\"blogPostEditForm\" class=\"form-post\" >\n          <div class=\"card-header\">\n            {{post.blog}}\n          </div>\n          <div class=\"card-block\">\n            <div class=\"form-group \">\n              <div class=\"input-group col-md-12\">\n                <input [value]=\"post.title\" formControlName=\"title\" class=\"form-control input-lg\" type=\"text\" placeholder=\"Enter Title here ...\" style=\"font-size: 15px; \"/>\n              </div>\n            </div>\n\n            <div class=\"form-group \">\n              <div class=\"input-group col-md-12\">\n                <textarea  class=\"form-post-textarea\" [froalaEditor]=\"options\"  formControlName=\"content\" style=\"font-size: 15px\">{{post.content}}</textarea>\n              </div>\n            </div>\n\n            <div class=\"text-center btn-group-lg\">\n              <button class=\"btn btn-primary btn-block \" (click)=\"savePost($event)\">Save</button>\n              <button class=\"btn btn-primary btn-block \" (click)=\"cancelEditPost($event)\">Cancel</button>\n\n            </div>\n            <!--<a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>-->\n          </div>\n        </form>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// router link: /blog/<blog-name> blog name is generic here.
// name can be anything, view will be different for signed in user
var BlogComponent = (function () {
    function BlogComponent(blogService, router, route, formBuilder) {
        this.blogService = blogService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postToEdit = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */]('', '', '', '');
        this.route.params.subscribe(function (params) {
            _this.blogname = params['blogname'];
        });
        this.blogPostEditForm = this.formBuilder.group({
            title: '',
            content: '',
        });
        this.signedInBlog = this.blogService.SignedInBlog;
        this.getBlog();
        this.options = {
            // placeholder: 'Edit Me',
            height: 300,
            placeholderText: 'Edit your content here ...',
            htmlAllowedStyleProps: ['font-family', 'font-size', 'background', 'color', 'width', 'text-align', 'vertical-align', 'background-color'],
            imageUploadURL: 'http://localhost:3000/image_upload',
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|',
                'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent',
                'quote', '-', 'insertLink', 'insertImage', 'embedly', 'insertTable', '|',
                'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|',
                'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
            htmlAllowedAttrs: ['innerHtml', 'accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen',
                'allowtransparency', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background',
                'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols',
                'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime',
                'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for',
                'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv',
                'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max',
                'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open',
                'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup',
                'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling',
                'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step',
                'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign',
                'webkitallowfullscreen', 'width', 'wrap'],
            imageUploadParams: {
                id: 'my_editor'
            },
            methods: {
                'html.set': this.postToEdit.content
            },
            events: {
                // 'froalaEditor.focus': function (e, editor) {
                //   // Do something here.
                //   console.log(editor);
                // },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    // Do something here.
                    console.log(images);
                },
                'froalaEditor.image.uploaded': function (e, editor, resp) {
                    console.log('response:' + resp.toString());
                },
                'froalaEditor.image.error': function (e, editor, error, response) {
                    console.log(response);
                    console.log(error);
                }
            },
            // Set request type.
            imageUploadMethod: 'POST',
        };
        this.getPosts();
    };
    BlogComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPostsByBlogName(this.blogname)
            .subscribe(function (blogPosts) {
            _this.blogPosts = blogPosts.sort(function (post1, post2) {
                var key1 = new Date(post1.date);
                var key2 = new Date(post2.date);
                if (key1 > key2) {
                    return -1;
                }
                else if (key1 == key2) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
            _this.blogPostIds = _this.blogPosts.map(function (post) {
                return post.id;
            });
        });
    };
    BlogComponent.prototype.getBlog = function () {
        var _this = this;
        this.blogService.getBlogByName(this.blogname)
            .subscribe(function (blogWithUser) {
            _this.blog = blogWithUser;
        });
    };
    BlogComponent.prototype.showForm = function (currId) {
        var ret = false;
        if (this.postToEdit.id != '') {
            if (this.postToEdit.id == currId) {
                ret = true;
            }
        }
        else {
            ret = false;
        }
        console.log('show form = ' + ret + ' ' + this.postToEdit + ' ' + currId);
        return ret;
    };
    BlogComponent.prototype.showEditButton = function (curr_id) {
        var ret = false;
        if (this.blog && this.signedInBlog) {
            if (this.blog.name == this.signedInBlog.name) {
                if (this.postToEdit.id == '') {
                    ret = true;
                }
            }
        }
        return ret;
    };
    BlogComponent.prototype.editPost = function (id) {
        console.log('edit poiost');
        this.postToEdit = this.blogPosts.filter(function (post) {
            return post.id == id;
        })[0];
        // this.options.methods['html.set'] = this.postToEdit.content;
        console.log(this.options);
    };
    BlogComponent.prototype.savePost = function (e) {
        var _this = this;
        e.preventDefault();
        console.log('Save pressed!');
        var title = this.blogPostEditForm.get('title').value;
        var content = this.blogPostEditForm.get('content').value;
        var post = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */](this.postToEdit.id, title, content, this.blog.name);
        this.blogService.editPost(post)
            .subscribe(function (p) {
            post = p;
            console.log('post = ' + post.toString());
            _this.getPosts();
            _this.postToEdit = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */]('', '', '', '');
        });
        console.log('exit');
    };
    BlogComponent.prototype.cancelEditPost = function (e) {
        e.preventDefault();
        this.postToEdit = new __WEBPACK_IMPORTED_MODULE_3__post__["a" /* Post */]('', '', '', '');
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], BlogComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-pane {\r\n  border: 2px solid white;\r\n  background-color: #efefef;\r\n  border-radius: 5px ;\r\n  margin-bottom: 100px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.custom-nav {\r\n  border: 2px solid white;\r\n}\r\n\r\n.custom-tab {\r\n  /*border: 2px solid white;*/\r\n  /*background: ;*/\r\n}\r\n\r\n.custom-pane-content {\r\n  margin: 25px;\r\n}\r\n\r\n.custom-pane-title {\r\n  font-family: 'Helvetica';\r\n  border-bottom: 2px solid #c4c4c4 ;\r\n  height: 60px;\r\n}\r\n\r\n.custom-pane-title h3 {\r\n  margin: 6px 0;\r\n}\r\n\r\n.custom-form {\r\n  margin-top: 20px;\r\n}\r\n\r\n.custom-form .form-group{\r\n  border-bottom: 2px solid #e8e8e8;\r\n  height: 90px;\r\n}\r\n\r\n.custom-form .form-group p, .custom-form .form-group label, .custom-form .form-group input{\r\n  margin: 20px 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"bd-example bd-example-tabs shift-down\" >\n    <div class=\"row  shift-down\">\n\n      <div class=\"col-md-6 col-md-offset-2 custom-pane\">\n        <div class=\"custom-pane-content\">\n          <div class=\"custom-pane-title\">\n            <h3>Account</h3>\n          </div>\n\n          <div class=\"custom-form\">\n            <form [formGroup]=\"settingForm\">\n              <div class=\"form-group\" *ngFor=\"let i of indices\">\n                <label [for]=\"labels[i]\" class=\"col-sm-3 control-label\">{{labels[i]}}</label>\n                <div [id]=\"labels[i]\" class=\"col-sm-9\">\n                  <input type=\"text\" [formControlName]=\"labels[i]\" [id]=\"labels[i]\" [value]=\"properties[i]\" class=\"form-control\"  name=\"concept\"/>\n                  <!--<p>{{properties[i]}}</p>-->\n\n                </div>\n              </div>\n              <button (click)=\"onSaveClicked($event)\" class=\"btn btn-primary col-md-2\">Save</button>\n            </form>\n\n\n\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingComponent = (function () {
    function SettingComponent(blogService, router, formBuilder) {
        this.blogService = blogService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.properties = [];
        this.labels = ['Title', 'About', 'Username', 'Password'];
        this.indices = [0, 1, 2, 3];
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.settingForm = this.formBuilder.group({
            Title: '',
            About: '',
            Username: '',
            Password: ''
        });
        this.blog = this.blogService.retrieveSignedInBlog();
        console.log("current blog: ");
        console.log(this.blog);
        this.properties = [this.blog.title,
            this.blog.about, this.blog.user.username,
            this.blog.user.password];
    };
    SettingComponent.prototype.onSaveClicked = function (e) {
        var _this = this;
        e.preventDefault();
        var about = this.settingForm.get('About').value;
        var title = this.settingForm.get('Title').value;
        var username = this.settingForm.get('Username').value;
        var password = this.settingForm.get('Password').value;
        this.blogService.updateBlog({
            title: title, about: about, newFollowing: '',
            username: username, password: password
        }, this.blog.name)
            .subscribe(function (data) {
            console.log(_this.blog);
            _this.router.navigateByUrl('/blog/' + _this.blog.name);
            console.log("updated blog!");
            console.log(data);
        });
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/blog/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], SettingComponent);

var _a, _b, _c;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"card\" *ngFor=\"let i of x\">-->\r\n  <!--<h3 class=\"card-header primary-color white-text\">Featured {{i}}</h3>-->\r\n  <!--<div class=\"card-body\">-->\r\n    <!--<h4 class=\"card-title\">Special title treatment</h4>-->\r\n    <!--<p class=\"card-text\">With supporting text below as a natural sna lead-in to additional content.</p>-->\r\n    <!--<a class=\"btn btn-primary\">Go somewhere</a>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"shift-down\">-->\r\n  <!--{{postsToShow | json }}-->\r\n<!--</div>-->\r\n<div class=\"shift-down\">\r\n  <div class=\"row\" *ngFor=\"let post of postsToShow\">\r\n    <div  class=\"shift-down\" >\r\n      <div  class=\"col-md-1 col-md-offset-3\" style=\"margin-right: 0px; width: 120px !important; margin-left: 25%; padding: 0; \">\r\n        <img class=\"img-rounded\"  style=\"float: right; border-radius: 10px;margin: 0px; padding: 0 !important; width: 75px; height: 75px; background-color: white \"  src=\"assets/images/user.png\"  alt=\"no image\">\r\n      </div>\r\n\r\n      <div class=\"container-fluid col-md-5 \" >\r\n        <div class=\"card-block drop-shadow \" style=\"border-radius:10px; padding: 0px; margin: 0px; align-items: center; background-color: white\">\r\n\r\n          <div class=\"card-header\" style=\"height: 50px;\">\r\n            <small style=\"display: block; margin-left: 10px\">\r\n              <b>\r\n                {{post.blog}}\r\n              </b>\r\n              <a style=\"margin-left: 10px\">Follow</a>\r\n            </small>\r\n          </div>\r\n          <div style=\"margin:10px 10px\">\r\n\r\n            <div class=\"\" style=\"height: 40px; margin: 40px  20px;\">\r\n              <h4 class=\"card-title\" >\r\n\r\n                {{post.title}}\r\n              </h4>\r\n            </div>\r\n            <div class=\"card-text \" style=\"margin-left: 20px; \" [innerHtml]=\"post.content\"></div>\r\n          </div>\r\n\r\n          <div class=\"card-footer container-fluid\" style=\"height: 30px;padding: 3px 0px ; margin: 0px  20px; background-color: white; \">\r\n            <div class=\"col-md-2\">\r\n              <small><a href=\"#\"   class=\"fa fa-heart\">  <b> Like </b></a></small>\r\n            </div>\r\n            <div class=\" col-md-1 col-md-offset-9\" style=\"padding: 4px 0px; color: #1f7e9a; \">\r\n              <small >\r\n                <p><i class=\"fa fa-thumbs-up\"></i> {{post.likes}}</p>\r\n              </small>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--All posts ended! at last show the categories and the related blogs to follow-->\r\n\r\n  <div class=\"row\">\r\n    <div  class=\"shift-down\">\r\n      <div  class=\"col-md-1 col-md-offset-3\" style=\"margin-right: 0px; width: 120px !important; margin-left: 25%; padding: 0; \">\r\n        <img class=\"img-rounded\"  style=\"float: right; border-radius: 10px;margin: 0px; padding: 0 !important; width: 75px; height: 75px; background-color: white \"  src=\"assets/images/user.png\"  alt=\"no image\">\r\n      </div>\r\n\r\n      <div class=\"container-fluid col-md-5 \" >\r\n        <div class=\"card-block drop-shadow \" style=\"border-radius:10px; padding: 0px; margin: 0px; align-items: center; background-color: white\">\r\n\r\n          <div class=\"card-header\" style=\"height: 50px;\">\r\n\r\n            <b style=\"margin-left: 10px\">\r\n              Do you want to see more posts?\r\n            </b>\r\n            <!--<a style=\"margin-left: 10px\">Follow</a>-->\r\n\r\n          </div>\r\n\r\n          <div style=\"margin:10px 10px\">\r\n\r\n            <div class=\"\" style=\"height: 40px; margin: 0px  20px;\">\r\n              <p class=\"card-title\" >\r\n                The more blogs you follow, the more posts you will see in the dashboard. Explore <a routerLink=\"/explore\">now</a>!\r\n              </p>\r\n            </div>\r\n            <p class=\"card-text \" style=\"white-space: pre-line; margin-left: 20px \" >\r\n            </p>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(blogService) {
        this.blogService = blogService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getFollowing();
        //
        // const post: Post = this.blogFollowing[0].blogPosts[0];
        // post.
    };
    DashboardComponent.prototype.getFollowing = function () {
        var _this = this;
        this.blogService.signedInBlogObservable$.subscribe(function (blog) {
            _this.blog = blog;
            _this.blogService.getFollowing(_this.blog.name)
                .subscribe(function (data) {
                _this.blogFollowing = data;
                var all_posts = [];
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].blogPosts.length; j++) {
                        all_posts.push(data[i].blogPosts[j]);
                    }
                }
                _this.postsToShow = all_posts.sort(function (post1, post2) { return post2.date - post1.date; });
                // console.log(this.postsToShow[0].blog);
            });
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/explore/explore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categories-tabs {\r\n  border: 2px solid white;\r\n}\r\n\r\n.card-extra {\r\n  border-radius:5px;\r\n  padding: 0px;\r\n  margin: 20px 0px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  background-color: white !important;\r\n\r\n}\r\n\r\n.card-footer-extra {\r\n  height: 50px;\r\n  padding: 10px 0px ;\r\n  margin: 0px  20px;\r\n  background-color: white;\r\n}\r\n\r\n/*card-white {*/\r\n  /**/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">-->\n  <div class=\"bd-example bd-example-tabs shift-down\" >\n    <div class=\"row  shift-down\">\n      <div class=\"col-md-2\">\n        <div class=\"nav flex-column nav-pills categories-tabs\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n          <a class=\"nav-link\"  id=\"v-pills-all-tab\" data-toggle=\"pill\" href=\"#v-pills-all\" role=\"tab\" aria-controls=\"v-pills-all\" aria-selected=\"false\" >All</a>\n\n\n          <a *ngFor=\"let c of categories\" class=\"nav-link\" [id]=\"'v-pills-'+c+'-tab'\" data-toggle=\"pill\" [href]=\"'#v-pills-'+c\" role=\"tab\" [attr.aria-controls]=\"'v-pills-'+c\" aria-selected=\"false\">{{c}}</a>\n\n        </div>\n      </div>\n      <div class=\"col-md-6 col-md-offset-2\">\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\n          <div class=\"tab-pane fade\" id=\"v-pills-all\" role=\"tabpanel\" aria-labelledby=\"v-pills-all-tab\">\n            <div *ngFor=\"let blog of blogs\">\n              {{blog | json}}\n            </div>\n          </div>\n          <div *ngFor=\"let c of categories\" class=\"tab-pane fade\" [id]=\"'v-pills-'+c\" role=\"tabpanel\" [attr.aria-labelledby]=\"'v-pills-'+c+'-tab'\">\n            <div *ngFor=\"let blog of categoryWiseBlogs[c]\">\n              <div class=\"card-block drop-shadow shift-down row card-extra\">\n                <div class=\"card-header\" style=\"height: 50px;\">\n                  <small style=\"margin-left: 10px \">\n                    <b>\n                      {{blog.name}}\n                    </b>\n                    <button class=\"btn btn-primary btn-sm  col-md-offset-9\" ><i class=\"fa fa-plus\"> </i> Follow</button>\n                  </small>\n                </div>\n                <div style=\"margin:10px 30px\">\n\n                  <div class=\"\" style=\"height: 40px;\">\n                    <h4 class=\"card-title\" >\n\n                      {{blog.title}}\n                    </h4>\n                  </div>\n                  <p class=\"card-text \" style=\"white-space: pre-line;\" >About goes here!!!{{blog.about}}</p>\n                </div>\n\n                <div class=\"card-footer container-fluid card-footer-extra\">\n                  <div class=\"col-md-2\">\n                    <small>Followers: {{blog.followers.length}}</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!--</div>-->\n            <!--<div class=\"tab-pane fade\" id=\"v-pills-music\" role=\"tabpanel\" aria-labelledby=\"v-pills-music-tab\">-->\n              <!--<p>{{categoryWiseBlogs['Music'] | json}}</p>-->\n            <!--</div>-->\n            <!--<div class=\"tab-pane fade\" id=\"v-pills-celebrity\" role=\"tabpanel\" aria-labelledby=\"v-pills-celebrity-tab\">-->\n              <!--<p>{{categoryWiseBlogs['Celebrity'] | json}}</p>-->\n\n            <!--</div>-->\n            <!--<div class=\"tab-pane fade\" id=\"v-pills-tv\" role=\"tabpanel\" aria-labelledby=\"v-pills-tv-tab\">-->\n              <!--<p>{{categoryWiseBlogs['TV'] | json}}</p>-->\n            <!--</div>-->\n            <!--<div class=\"tab-pane fade\" id=\"v-pills-fun\" role=\"tabpanel\" aria-labelledby=\"v-pills-fun-tab\">-->\n              <!--<p>{{categoryWiseBlogs['Fun'] | json}}</p>-->\n\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = (function () {
    function ExploreComponent(blogService) {
        this.blogService = blogService;
    }
    ExploreComponent.prototype.ngOnInit = function () {
        this.getBlogs();
        // this.getPosts();
    };
    ExploreComponent.prototype.getBlogs = function () {
        var _this = this;
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
            .subscribe(function (blogs) {
            _this.blogs = blogs;
            for (var i = 0; i < blogs.length; i++) {
                var category = blogs[i].category;
                _this.categoryWiseBlogs[category].push(blogs[i]);
            }
            // categoryWiseBlogs
        });
    };
    return ExploreComponent;
}());
ExploreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-explore',
        template: __webpack_require__("../../../../../src/app/explore/explore.component.html"),
        styles: [__webpack_require__("../../../../../src/app/explore/explore.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__blog_service__["a" /* BlogService */]) === "function" && _a || Object])
], ExploreComponent);

var _a;
//# sourceMappingURL=explore.component.js.map

/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bg {\r\n  background: url('/assets/images/bg.jpg') no-repeat center center fixed;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid text-center bg\" style=\"min-height: 100%;min-height: 100vh;display: flex;align-items: center;\" >\n  <div class=\"btn-group-lg col-md-4 col-md-offset-4 \" >\n    <div style=\"margin-bottom: 40px !important; color: white;\">\n      <h1 style=\"font-weight: bolder\">Blog now!</h1>\n      <p>We made it really, really simple for people to make a blog</p>\n    </div>\n    <a class=\"btn btn-primary btn-block \" routerLink=\"sign-up\" style=\"margin-bottom: 7px !important;\">Get Started</a>\n    <a class=\"btn btn-default btn-block\" routerLink=\"sign-in\">Log In</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/get-started/get-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetStartedComponent = (function () {
    function GetStartedComponent() {
        this.btnClick = function () {
            this.router.navigate(['/user']);
        };
    }
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    return GetStartedComponent;
}());
GetStartedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-get-started',
        template: __webpack_require__("../../../../../src/app/get-started/get-started.component.html"),
        styles: [__webpack_require__("../../../../../src/app/get-started/get-started.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GetStartedComponent);

//# sourceMappingURL=get-started.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(id, title, content, blog, date, likes) {
        if (date === void 0) { date = new Date(); }
        if (likes === void 0) { likes = 0; }
        this.id = id;
        this.title = title;
        this.content = content;
        this.blog = blog;
        this.date = date;
        this.likes = likes;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/images/signin-bg.jpg') no-repeat center center fixed;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center bg\" style=\"min-height: 100%;min-height: 100vh;display: flex;align-items: center;\" >\n\n  <div class=\"btn-group-lg col-md-4 col-md-offset-4 \" >\n    <form [formGroup]=\"signinForm\">\n      <div style=\"margin-bottom: 40px !important; color: white;\">\n        <h1 class=\"logo-heading\">Blog now!</h1>\n        <h4>Sign in</h4>\n\n      </div>\n\n      <div class=\"form-group \">\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">\n            <i style=\"font-size:20px; \" class=\"fa fa-envelope\"></i>\n          </div>\n          <input formControlName=\"username_email\" class=\"form-control input-lg\" id=\"email\" type=\"text\" placeholder=\"Username or Email\" style=\"font-size: 15px\"/>\n        </div>\n      </div>\n\n      <div class=\"form-group \">\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">\n            <i style=\"font-size:24px; padding-right: 3px; \" class=\"fa fa-lock\"></i>\n          </div>\n          <input class=\"form-control input-lg\" id=\"password\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" style=\"font-size: 15px\"/>\n        </div>\n      </div>\n\n      <div class=\"text-center btn-group-lg\">\n        <div *ngIf=\"userNotFound\" class=\"alert alert-warning\">{{username_or_email}} or password is wrong. Please try again!</div>\n        <button class=\"btn btn-primary btn-block \" (click)=\"submitSignIn($event)\">Login</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(formBuilder, blogService, router) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.router = router;
        this.signinUrl = __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* SERVER_BASE_URL */] + '/blogs';
        this.onSignIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            username_email: '',
            password: ''
        });
        this.getBlogs();
        // send data to service so that each component can use this data
    };
    SignInComponent.prototype.getBlogs = function () {
        var _this = this;
        this.users = [];
        this.blogService.getBlogs()
            .subscribe(function (data) {
            _this.blogs = data;
            // for (let blog of data) {
            //   this.users.push(blog.user);
            // }
        });
    };
    SignInComponent.prototype.submitSignIn = function (e) {
        e.preventDefault();
        // console.log(this.signinForm.get('username_email').value);
        var username_email = {
            value: this.signinForm.get('username_email').value,
            isEmail: false
        };
        username_email.isEmail = username_email.value.split('@').length > 1;
        var password = this.signinForm.get('password').value;
        var result = this.blogs.filter(function (blog) {
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
            window.location.reload();
        }
        else {
            this.userNotFound = true;
        }
        this.username_or_email = (username_email.isEmail) ? 'Email' : 'Username';
        // this.blogService.setSi;
        // this.onSignIn.emit(this.blogService.SignedInBlog);
    };
    return SignInComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SignInComponent.prototype, "onSignIn", void 0);
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__("../../../../../src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-in/sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignInComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sign-up works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignUpComponent);

//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map