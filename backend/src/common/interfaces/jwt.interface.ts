export type JwtPayload = {
  id?: string;
};

export interface IJwt {
  sign(payload: JwtPayload): Promise<string>;

  verify(token: string): Promise<boolean | JwtPayload>;
}
