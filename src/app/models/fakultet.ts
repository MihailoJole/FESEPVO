import { StudijskiProgram } from "./studijskiProgram";


export interface Fakultet{
    id: number;
    id2: number;
    naziv: string;
    adresa: string;
    oblast: string;
    strudijskiProgrami: StudijskiProgram;
}

