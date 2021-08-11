import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Code } from './models/Code.model';
import { CompiladorService } from './service/compilador.service';
import { Salida } from './models/Salida.model';
import { Error } from './models/Error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  code!: Code;
  form!: FormGroup;
  displayModal!: boolean;
  arrayOutput: string[] = [];
  errors: Error[] = [];
  btnCompileDisabled: boolean = false;
  constructor(
    private fb: FormBuilder,
    private compiladorService: CompiladorService
  ){

  }
  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.form = this.fb.group({
      codigo: ['sisas{3<4}(imprimir{1};imprimir{2};)', [Validators.required]]
    });
    this.form.valueChanges.subscribe(
      valor => {
        if(valor.codigo.length == 0){
          this.btnCompileDisabled = true;          
        } else {
          this.btnCompileDisabled = false;          
        }
      }
    );
  }

  analizadorLexer(){
    this.displayModal = true;
    let {codigo}: {codigo: string} = this.form.value;
    if(codigo.length == 0){
      this.btnCompileDisabled = true;
    }else {
      this.code = new Code(codigo.split("\n").join(""));
      this.compiladorService.compile(this.code).subscribe( (salida) =>{
        this.errors = salida.errors;
        this.arrayOutput = salida.output.split("\n");
        console.log(salida);
      });
    }
  }
}
