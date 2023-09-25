import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { DepositoContaComponent } from './deposito-conta/deposito-conta.component';
import { TransferenciaContaComponent } from './transferencia-conta/transferencia-conta.component';
import { SaqueContaComponent } from './saque-conta/saque-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    ListagemContaComponent,
    CadastroContaComponent,
    DepositoContaComponent,
    TransferenciaContaComponent,
    SaqueContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    ListagemContaComponent,
    CadastroContaComponent,
    DepositoContaComponent,
    TransferenciaContaComponent,
    SaqueContaComponent
  ]
})
export class ContaModule { }
