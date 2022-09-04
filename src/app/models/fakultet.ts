import { StudijskiProgram } from "./studijskiProgram";


export interface Fakultet{
    id: number;
    naziv: string;
    adresa: string;
    oblast: string;
    strudijskiProgrami: StudijskiProgram[];
}