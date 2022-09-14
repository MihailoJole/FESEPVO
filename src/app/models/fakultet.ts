import { StudijskiProgram } from "./studijskiProgram";
import { Univerzitet } from "./univerzitet";


export interface Fakultet{
    id: number;
    naziv: string;
    adresa: string;
    oblast: string;
    strudijskiProgrami: StudijskiProgram[];
    univerzitet: Univerzitet;
}