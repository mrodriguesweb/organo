import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, GeneroLiterarioComponent } from '../genero-literario/genero-literario';
import { Livro } from '../livro/livro';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css'
})
export class ListaLivros implements OnInit {

  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;

      if(!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }

      this.livrosPorGenero.get(generoId)?.push(livro)
    })

    this.generos = [
     {
      id: 'romance',
      value: 'Romance',
      livros: this.livrosPorGenero.get("romance") ?? []
     },
     {
      id: 'fantasia',
      value: 'Fantasia',
      livros: this.livrosPorGenero.get("fantasia") ?? []
     },
     {
      id: 'tecnicos',
      value: 'Técnicos',
      livros: this.livrosPorGenero.get("tecnicos") ?? []
     },
     {
      id: 'misterio',
      value: 'Mistério',
      livros: this.livrosPorGenero.get("misterio") ?? []
     }
    ]
  }
}