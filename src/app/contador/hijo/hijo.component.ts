import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})


export class HijoComponent {
  @Input() contador!:number
  @Output() cambioContador = new EventEmitter<number>()


  multiplicar() {
    this.contador *=2;
    this.cambioContador.emit(this.contador)
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador)
  }


  resetNieto(event: number) {
    this.contador = event;
    this.cambioContador.emit(this.contador)
    
  }
}
