import { StudijskiProgram } from "./studijskiProgram";

export interface Modul{
    id: number;
    naziv: string;
    semestar: number;
    studijskiProgram: StudijskiProgram;
}