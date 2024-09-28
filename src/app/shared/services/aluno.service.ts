import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Aluno } from '../models/Aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  api = `${environment.api}/aluno/`
  constructor(private httpclient: HttpClient) { }

  inserir(novoAluno: Aluno): Observable<Aluno>{
    return this.httpclient.post<Aluno>(this.api, novoAluno)
  }

  listar(): Observable<Aluno[]>{
    return this.httpclient.get<Aluno[]>(this.api)
  }

  deletar(idAluno: number): Observable<object>{
    return this.httpclient.delete(`${this.api}${idAluno}`)
  }

  pesquisarPorId(id: number): Observable<Aluno> {
    return this.httpclient.get<Aluno>(`${this.api}${id}`);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    return this.httpclient.put<Aluno>(`${this.api}${aluno.id}`, aluno);
  }


}
