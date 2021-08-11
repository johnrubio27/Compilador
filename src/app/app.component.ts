import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Code } from './models/Code.model';
import { CompiladorService } from './service/compilador.service';
import { Salida } from './models/Salida.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  code!: Code;
  form!: FormGroup;
  displayModal!: boolean;
  validaciones!: string[];
  salida!: Salida;
  codigoFormateado: string[] = [];
  constructor(
    private fb: FormBuilder,
    private compiladorService: CompiladorService
  ){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      codigo: [null, [Validators.required]]
    })
  }

  showModalDialog() {
  }

  analizadorLexer(){
    this.displayModal = true;
    let {codigo}: {codigo: string} = this.form.value;
    this.code = new Code(codigo.split("\n").join(""));
    this.compiladorService.compile(this.code).subscribe( (salida) =>{
      this.salida = salida;
    });
  }
}
