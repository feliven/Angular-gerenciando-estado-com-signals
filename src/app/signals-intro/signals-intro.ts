import { Component, computed, signal } from '@angular/core';

export interface Elemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
}

@Component({
  selector: 'app-signals-intro',
  imports: [],
  templateUrl: './signals-intro.html',
  styleUrl: './signals-intro.css',
})
export class SignalsIntro {
  protected elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16 },
    { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23 },
    { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35 },
  ];

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  exibirInfoElemento = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: (${elemento.simbolo}), Número de Massa: ${elemento.numeroMassa}`
      : 'Nenhum elemento selecionado';
  });
}
