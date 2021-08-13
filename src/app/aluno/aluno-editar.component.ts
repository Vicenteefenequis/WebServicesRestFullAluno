import { AlunoService } from './aluno.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from './aluno.model';

@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css'],
})
export class AlundoEditarComponent implements OnInit {
  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private rotaAtiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAluno(this.rotaAtiva.snapshot.paramMap.get('id'));
  }

  getAluno(id) {
    this.alunoService.getAluno(id).subscribe(
      (dado) => {
        this.aluno = dado;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  atualizar() {
    this.alunoService.updateAluno(this.aluno.idaluno, this.aluno).subscribe(
      (dado) => {
        this.alunoService.openSnackBar('Aluno atualizado !');
        this.router.navigate(['/aluno']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelar() {
    this.router.navigate(['/aluno']);
  }
}
