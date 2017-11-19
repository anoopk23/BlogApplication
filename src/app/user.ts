export class User {
  constructor(
    public username: String,
    public password: String,
    public email: String,
    public isAdmin?: Boolean
  ){}
}
