import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../blog.service";
import {Blog} from "../blog";
import {Post} from "../post";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";



// router link: /blog/<blog-name> blog name is generic here.
// name can be anything, view will be different for signed in user
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }


  blogname: String;
  blog: Blog;

  signedInBlog: Blog;

  blogPosts: Post[];
  blogPostIds: String[];

  options: any;

  postToEdit: Post;

  blogPostEditForm: FormGroup;

  ngOnInit() {

    this.postToEdit = new  Post('', '', '', '');

    this.route.params.subscribe((params) => {
      this.blogname = params['blogname'];
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


  }

  getPosts() {


    this.blogService.getPostsByBlogName(this.blogname)
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts.sort(function(post1, post2) {
          const key1 = new Date(post1.date);
          const key2 = new Date(post2.date);

          if (key1 > key2) {
            return -1;
          } else if (key1 == key2) {
            return 0;
          } else {
            return 1;
          }
        });
        this.blogPostIds = this.blogPosts.map((post) => {
          return post.id;
        });
      });
  }

  getBlog() {
    this.blogService.getBlogByName(this.blogname)
      .subscribe((blogWithUser) => {
        this.blog = blogWithUser;
      });
  }

  showForm(currId) {
    let ret = false;
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
  }

  showEditButton(curr_id) {
    let ret = false;
    if(this.blog && this.signedInBlog) {
      if (this.blog.name == this.signedInBlog.name) {
        if (this.postToEdit.id == '') {
          ret = true;
        }
      }
    }
    return  ret ;
  }

  editPost(id) {
    console.log('edit poiost');
    this.postToEdit = this.blogPosts.filter((post) => {
      return post.id == id;
    })[0];

    // this.options.methods['html.set'] = this.postToEdit.content;


    console.log(this.options);
  }

  savePost(e) {
    e.preventDefault();
    console.log('Save pressed!');
    const title = this.blogPostEditForm.get('title').value;
    const content = this.blogPostEditForm.get('content').value;

    let post = new Post(this.postToEdit.id, title, content, this.blog.name);
    this.blogService.editPost(post)
      .subscribe((p) => {
        post = p;
        console.log('post = '  + post.toString());
        this.getPosts();
        this.postToEdit = new Post('', '', '', '');
      });


    console.log('exit');
  }

  cancelEditPost(e) {
    e.preventDefault();
    this.postToEdit = new Post('', '', '', '');
  }



}
