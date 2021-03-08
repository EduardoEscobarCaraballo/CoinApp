import { Persona } from './persona.model';
import { Moneda } from './moneda.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './service/firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'CoinApp';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }

  personas: Persona[] = [new Persona("Monero","XML","0.004334 BTC"), new Persona("Dash","DSH","0.004496 BTC")];
  monedas: Moneda[] = [new Moneda("Nombre","Símbolo","Suma", "Precio de Compra", "Precio Actual"), new Moneda("Monero","XMR","5679","0.0837","0.0782"), new Moneda("Dash","DSH","35","0.292432","0.349825")];

  nombreInput:string;
  apellidoInput:string;
  valorInput:string;

  nombre1Input:string;
  simbolo1Input:string;
  sumaInput:string;
  valor1Input:string;
  valor2Input:string;

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput, this.valorInput);
    this.personas.push(persona1);
  }

  onAgregarMoneda(){
    let moneda1 = new Moneda(this.nombre1Input, this.simbolo1Input, this.sumaInput, this.valor1Input, this.valor2Input);
    this.monedas.push(moneda1);
  }
}
