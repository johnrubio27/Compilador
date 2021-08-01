import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lexer } from './models/lex.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form!: FormGroup;
  codigoFormateado: string[] = [];
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      codigo: [null, [Validators.required]]
    })
  }

  analizadorLexer(){
    let arrayCodigo: string[];
    let {codigo} : {codigo: string} = this.form.value;
    // Aqui quitamos el cierre de la etiqueta parrafo el editor.
    arrayCodigo = codigo.split('</p>');
    // para quitar la ultima linea que es un vacio.
    arrayCodigo.pop();
    this.codigoFormateado = [];
    let aux: string;
    arrayCodigo.forEach(element =>{
      aux = element.replace('<p>', '');
      // cuando le dan enter en la ultima linea
      if(aux != '<br>'){
        this.codigoFormateado.push(aux);
      }
    })
    // console.log(this.codigoFormateado)
    const lexerPropio: Lexer = new Lexer(this.codigoFormateado);
    lexerPropio.recorrer();
    console.log(lexerPropio._validaciones);
  }
}
