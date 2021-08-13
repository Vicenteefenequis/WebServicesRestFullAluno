import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoNovoComponent } from './aluno/aluno-novo.component';
import { AlundoEditarComponent } from './aluno/aluno-editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'aluno',
    component: AlunoComponent,
  },
  {
    path: 'aluno-novo',
    component: AlunoNovoComponent,
  },
  {
    path: 'aluno-editar/:id',
    component: AlundoEditarComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
