import { Component, input } from '@angular/core';
import { Livro, LivroComponent } from '../livro/livro';
import { livros } from '../../mock-livros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})

export class GeneroLiterarioComponent {

  genero = input.required<GeneroLiterario>();
  
}

export interface GeneroLiterario {
  id: string;
  value: string;
  livros: Livro[];
}