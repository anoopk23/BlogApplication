
import {User} from "./user";
import {Post} from "./post";

export class Blog {
  constructor(
    public name: String,
    public about: String,
    public title: String,
    public user: User,
    public date: Date,
    public category: String,
    public blogPosts?: Post[]
  ) {}
}
