import { Fakultet } from "./fakultet";
import { Modul } from "./modul";


export interface StudijskiProgram{
    id: number;
    naziv: string;
    hasModul: boolean;
    moduli: Modul[];
    fakultet: Fakultet;
    //nivoStudija: NivoStudija;
    status: string;
}