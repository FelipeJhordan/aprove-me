export class Payable {
  constructor(id: string, value: number, emissionDate: Date, assignor: string) {
    this.id = id;
    this.value = value;
    this.emissionDate = emissionDate;
    this.assignor = assignor;
  }
  id: string;

  value: number;

  emissionDate: Date;

  assignor: string;
}
