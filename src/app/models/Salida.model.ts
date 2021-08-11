import { Error } from "./Error.model";

export interface Salida {
    output:  string;
    errors:  Error[];
    symbols: any[];
}
