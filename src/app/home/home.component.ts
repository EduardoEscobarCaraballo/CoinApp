import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Persona } from '../persona.model';
import { Moneda } from '../moneda.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }


  logout() {
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  titulo = "CoinApp"

  personas: Persona[] = [new Persona("Monero", "XML", "0.004334 BTC"), new Persona("Dash", "DSH", "0.004496 BTC")];
  monedas: Moneda[] = [new Moneda("Monero", "XMR", "5679", "0.0837", "0.0782"), new Moneda("Dash", "DSH", "35", "0.292432", "0.349825"), new Moneda("Link", "LINK", "634", "0.003721", "0.003692"), new Moneda("Ethereum", "ETH", "29", "0.002741", "0.006382")];

  nombreInput: string;
  apellidoInput: string;
  valorInput: string;

  nombre1Input: string;
  simbolo1Input: string;
  sumaInput: string;
  valor1Input: string;
  valor2Input: string;

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput, this.valorInput);
    this.personas.push(persona1);
  }

  onAgregarMoneda() {
    let moneda1 = new Moneda(this.nombre1Input, this.simbolo1Input, this.sumaInput, this.valor1Input, this.valor2Input);
    this.monedas.push(moneda1);
  }

  deleteRow(moneda) {
    const index = this.monedas.indexOf(moneda);
    this.monedas.splice(index, 1);
  }
}
