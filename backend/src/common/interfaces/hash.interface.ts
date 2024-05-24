export interface IHash {
  hash(value: string, salt?: number): Promise<string>;
  compare(value: string, hash: string): Promise<boolean>;
}
