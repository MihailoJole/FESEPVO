import {NastavnoOsoblje} from './nastavnoOsoblje';
import {IRola} from './rola';

export interface IKorisnik {
  id: number;
  username: string;
  rola: IRola;
  nastavnoOsoblje: NastavnoOsoblje;
}
