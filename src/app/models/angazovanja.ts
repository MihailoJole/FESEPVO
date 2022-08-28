import { NastavnoOsoblje } from "./nastavnoOsoblje";
import { IOblikNastave } from "./oblikNastave";
import { IPredmet } from "./predmet";

export interface IAngazovanja{
    predmetDto: IPredmet,
    oblikNastave:IOblikNastave,
    osobljeDto:NastavnoOsoblje
}