export class Assignor {
  constructor(
    id: string,
    document: string,
    email: string,
    phone: string,
    name: string,
  ) {
    this.id = id;
    this.document = document;
    this.email = email;
    this.phone = phone;
    this.name = name;
  }

  id: string;

  document: string;

  email: string;

  phone: string;

  name: string;
}
