import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Conta } from '../models/Conta';
import { SaqueDeposito } from '../models/SaqueDeposito';
import { Transferencia } from '../models/Transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  api = `${environment.api}/contas/`;

  constructor(private clienteHttp: HttpClient) { }

  inserir(novaConta: Conta): Observable<Conta> {
    return this.clienteHttp.post<Conta>(
      this.api, novaConta);
  }

  listar(): Observable<Conta[]> {
    return this.clienteHttp.get<Conta[]>(this.api);
  }

  listar_paginado(page: number, pageSize: number): Observable<Conta[]> {
    return this.clienteHttp.get<Conta[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }

  deletar(idConta: number): Observable<object> {
    return this.clienteHttp.delete(`${this.api}${idConta}`);
  }

  pesquisarPorId(id: number): Observable<Conta> {
    return this.clienteHttp.get<Conta>(`${this.api}${id}`);
  }

  atualizar(conta: Conta): Observable<Conta> {
    return this.clienteHttp.put<Conta>(`${this.api}${conta.id}`, conta);
  }

  saque(saque: SaqueDeposito): Observable<SaqueDeposito>{
    return this.clienteHttp.post<SaqueDeposito>(`${this.api}${saque.conta}/saque/`, saque);
  }

  deposito(deposito: SaqueDeposito): Observable<SaqueDeposito>{
    return this.clienteHttp.post<SaqueDeposito>(`${this.api}${deposito.conta}/deposito/`, deposito);
  }

  tranferencia(transferencia: Transferencia): Observable<Transferencia>{
    return this.clienteHttp.post<Transferencia>(`${this.api}${transferencia.conta_origem}/transferencia/`, transferencia);
  }
}
