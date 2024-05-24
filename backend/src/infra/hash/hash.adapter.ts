import { compare, hash } from 'bcrypt';
import { IHash } from 'src/common/interfaces/hash.interface';

export class HashAdapter implements IHash {
  async hash(value: string, salt?: number): Promise<string> {
    const SALT = salt || 12;

    const valueHashed = hash(value, SALT);

    return valueHashed;
  }
  async compare(value: string, hash: string): Promise<boolean> {
    const is = await compare(value, hash);

    return is;
  }
}
