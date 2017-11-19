import { Component, OnInit } from '@angular/core';
import {Blog} from "../../blog";
import {BlogService} from "../../blog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Post} from "../../post";
import * as globals from '../../app.globals'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  blog: Blog;
  public options: Object;
  blogPostForm: FormGroup;
  editorContent: String;

  ngOnInit() {
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

      // Set max image size to 5MB.
      // imageMaxSize: 5 * 1024 * 1024,
      //
      // // Allow to upload PNG and JPG.
      // imageAllowedTypes: ['jpeg', 'jpg', 'png'],




    };

  }

  getBlog() {
    let blogname = '';
    this.route.params.subscribe((params) => {
      blogname = params['blogname'];
    });

    this.blogService.getBlogByName(blogname)
      .subscribe((blogWithUser) => {
        this.blog = blogWithUser;
      });
  }


  submitPost(event) {
    event.preventDefault();
    console.log('Submit pressed!');
    const title = this.blogPostForm.get('title').value;
    const content = this.blogPostForm.get('content').value;

    let post = new Post('', title, content, this.blog.name);
    this.blogService.addPost(post)
      .subscribe((p) => {
        post = p;
        console.log(post);
      });
    console.log('exit');

    // this.router.navigateByUrl(globals.SERVER_BASE_URL + '/blogs/' + this.blogService.SignedInBlog.name );

  }
}

// todo: edit in add-post 1(1 h) done!
// todo: sign-up 4(1)
// todo: likes 3(1.5)
// todo: favorite 6(2.5)
// todo: setting 2(2)
// todo: remake explore 5(2)
// todo: small left outs - logo-heading, log-out, gaurds, link on card-header-blog-name 7(2)
// todo: readme and github 8(1)
