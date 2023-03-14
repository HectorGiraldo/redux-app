import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent {

  @Input() contador!:number;
  @Output() cambioContador = new EventEmitter<number>();


  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }

}
