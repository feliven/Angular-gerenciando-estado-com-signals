import { Component, inject } from '@angular/core';
import { ElementoService } from '../shared/services/elemento.service';

@Component({
  selector: 'app-element-details',
  imports: [],
  templateUrl: './element-details.html',
  styleUrl: './element-details.css',
})
export class ElementDetails {
  private readonly service = inject(ElementoService);

  readonly favoritos = this.service.favoritos;
}
