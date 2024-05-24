export class User {
  constructor(id: string, login: string, password: string) {
    this.id = id;
    this.login = login;
    this.password = password;
  }

  id: string;
  login: string;
  password: string;
}
