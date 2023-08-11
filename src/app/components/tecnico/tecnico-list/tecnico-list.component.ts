import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Tecnico} from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

const ELEMENT_DATA: Tecnico[] = [
  {
    id: 1,
    nome: 'Wesley',
    cpf: "084894515641",
    email: 'wesleyeduardo.dev@gmail.com',
    senha: ' 12345',
    perfis: [],
    dataCriacao: new Date()
  },
  {
    id: 2,
    nome: 'Eduardo',
    cpf: "084894515641",
    email: 'eduardo.dev@gmail.com',
    senha: ' 12345',
    perfis: [],
    dataCriacao: new Date()
  },
  {
    id: 3,
    nome: 'João',
    cpf: "084894515641",
    email: 'joao.dev@gmail.com',
    senha: ' 12345',
    perfis: [],
    dataCriacao: new Date()
  },
  {
    id: 4,
    nome: 'Miguel',
    cpf: "084894515641",
    email: 'miguel.dev@gmail.com',
    senha: ' 12345',
    perfis: [],
    dataCriacao: new Date()
  }
];

