import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Stringifier } from 'postcss';

type Categoria = 'Todos' | 'Burgers' | 'Leves';

interface MenuItem {
  nome: string;
  categoria: Exclude<Categoria, 'Todos'>;
  preco: number;
  desc: string;
  imagem: String;
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
})
export class Menu {
  categorias: Categoria[] = ['Todos', 'Burgers', 'Leves'];
  categoriaSelecionada: Categoria = 'Todos';

  itens: MenuItem[] = [
    {
      nome: 'Bacon Buger',
      categoria: 'Burgers',
      preco: 39.9,
      desc: 'Bacon crocante, queijo e molho especial',
      imagem: 'assets/images/bacon-buger.jpg',
    },
    {
      nome: 'Cheeseburger',
      categoria: 'Burgers',
      preco: 34.9,
      desc: 'O clássico que funciona sempre.',
      imagem: 'assets/cheeseburger.jpg',
    },
    {
      nome: 'Cheese Salad',
      categoria: 'Leves',
      preco: 36.9,
      desc: 'Uma opção mais leve e deliciosa.',
      imagem: 'assets/cheesesalad.jpg',
    },
  ];

  get itensFiltrados(): MenuItem[] {
    if (this.categoriaSelecionada === 'Todos') return this.itens;
    return this.itens.filter((i) => i.categoria === this.categoriaSelecionada);
  }

  selecionarCategoria(cat: Categoria) {
    this.categoriaSelecionada = cat;
  }

  formatarPreco(valor: number): string {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
