import { IZvanje } from "./zvanje";

export interface NastavnoOsoblje {
  id: number;
  ime: string;
  prezime: string;
  zvanje: IZvanje;
}
