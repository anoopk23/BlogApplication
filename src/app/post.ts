
export class Post {
  constructor(
    public id: String,
    public title: String,
    public content: String,
    public blog: String,
    public date: Date = new Date(),
    public likes: Number = 0
  ) { }

}
