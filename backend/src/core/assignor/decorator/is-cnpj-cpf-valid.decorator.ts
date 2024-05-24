import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ async: false })
export class IsDocumentConstraint implements ValidatorConstraintInterface {
  property = 'document';
  validate(document: any) {
    return (
      typeof document === 'string' &&
      (cpf.isValid(document) || cnpj.isValid(document))
    );
  }

  defaultMessage() {
    return `${this.property} Documento inválido`;
  }
}

export function IsDocument(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDocumentConstraint,
    });
  };
}
