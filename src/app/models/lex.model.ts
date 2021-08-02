
export class Lexer {
    lineasCodigo: string[];
    reglasExpReg: RegExp[] = [];
    _validaciones: string[] = [];
    _numeroLineaCodigo: number = 1;
    constructor(lineasCodigo: string[]){
        this.lineasCodigo = lineasCodigo;
        this.reglasExpReg = [
            /[IJ]/,
            /[a-z]/,
            /[(0-9{1,6})]/,
            /\x/,
            /["+"{1,2}]/,
            /["-"{1,2}]/,
            /["/"{1,2}]/,
            /["%"{1,2}]/,
            /["*"{1,2}]/,
            /["="]/,
            /[">"]/,
            /["<"]/,
            /["!"]/
        ];
    }


    recorrer(){
        for (let i = 0; i < this.lineasCodigo.length; i++) {
            let elementoValido = true;
            for (let j = 0; j < this.reglasExpReg.length; j++) {
                if(this.lineasCodigo[i].match(this.reglasExpReg[j])){
                    elementoValido = true;
                    this._validaciones.push(`Es valido ${this.lineasCodigo[i]} en la linea ${this._numeroLineaCodigo} porque cumple la expresion regular ${this.reglasExpReg[j]}`)
                    break;
                }
                elementoValido = false;
            }
            if(elementoValido == false){
                this._validaciones.push(`No es valido ${this.lineasCodigo[i]} en la linea ${this._numeroLineaCodigo} porque no cumple ninguna regla`)
            }
            this._numeroLineaCodigo++;
        }
    }
}
