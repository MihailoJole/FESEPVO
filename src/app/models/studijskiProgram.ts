import { Modul } from "./modul";


export interface StudijskiProgram{
    id: number;
    naziv: string;
    imaModul: boolean;
    moduli: Modul;
}