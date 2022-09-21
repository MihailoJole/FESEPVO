import { Modul } from "./modul";
import { IPredmet } from "./predmet";

export interface PredmetModul{
    semestar: number;
    modul: Modul;
    predmet: IPredmet;
    pozicija : number;
    izborni : boolean;
    grupa : string;
    godina : number;
}