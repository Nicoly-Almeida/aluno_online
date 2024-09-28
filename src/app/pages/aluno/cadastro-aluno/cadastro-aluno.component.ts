import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/shared/models/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent {
  formGroup: FormGroup;

  constructor(private alunoService: AlunoService, private router: Router) { 
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      anoNascimento: new FormControl('', Validators.required),
      endereco: new FormGroup({
        cep: new FormControl('', Validators.required),
      }),
    });
  } 

  cadastrar() {
    const aluno: Aluno = this.formGroup.value;
    this.alunoService.inserir(aluno).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Aluno cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (erroBackend) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: erroBackend.error.detalhes,
        })
      }
    })
  }
}
