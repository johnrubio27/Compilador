import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salida } from '../models/Salida.model';
import { Code } from '../models/Code.model';
@Injectable({
  providedIn: 'root'
})
export class CompiladorService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  compile(code: Code): Observable<Salida>{
    return this.http.post<Salida>(`${this.url}/compile`, code);
  }
}