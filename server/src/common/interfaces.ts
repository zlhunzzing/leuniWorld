import { Request } from "express";

interface TokenData {
  email: string;
  iat: number;
  exp: number;
}

export interface TokenReq extends Request {
  tokenData: TokenData;
}
