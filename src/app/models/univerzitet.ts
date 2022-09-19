import { Fakultet } from "./fakultet";

export interface Univerzitet{
    id: number;
    naziv: string;
    fakulteti: Fakultet[];
}