
export class Lexer {
    lineasCodigo: string[];
    reglasExpReg: RegExp[] = []; 
    _validaciones: string[] = [];
    _numeroLineaCodigo: number = 1; 
    constructor(lineasCodigo: string[]){
        this.lineasCodigo = lineasCodigo;
        this.reglasExpReg = [
            /0*55/g,
            /ab/,
            /fg/
        ];
    }
    

    recorrer(){
        for (let i = 0; i < this.lineasCodigo.length; i++) {
            let elementoValido = true;

            for (let j = 0; j < this.reglasExpReg.length; j++) {
                if(this.lineasCodigo[i].match(this.reglasExpReg[j])){
                    elementoValido = true;
                    this._validaciones.push(`${this._numeroLineaCodigo}     ${this.lineasCodigo[i]} ${this.reglasExpReg[j]}`)
                    break;
                }
                elementoValido = false;
            }
            if(elementoValido == false){
                this._validaciones.push(`No es valido ${this.lineasCodigo[i]} ${this._numeroLineaCodigo}`)
            }
            this._numeroLineaCodigo++;
        }
    }
}