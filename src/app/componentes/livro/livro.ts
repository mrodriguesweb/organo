import { Component, input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.css'
})
export class LivroComponent {

  alternarFavorito() {
      this.livro().favorito = !this.livro().favorito;
  };

  livro = input.required<Livro>();

}

export interface Livro {
  titulo: string;
  autoria: string;
  imagem: string;
  genero: Genero;
  favorito: boolean;
}

export interface Genero {
  id: string;
  value: string;
  livros: Livro[];
}