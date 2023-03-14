import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementar, incrementar } from './contador/contador.actions';

interface appState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador!: number

  constructor(
     private store : Store<appState>
     ){
      this.store.subscribe(state => {
        this.contador = state.contador 
      })
  }

  incrementar() {
    this.store.dispatch(incrementar())
  }

  decrementar() {
    this.store.dispatch(decrementar())
  }
}
