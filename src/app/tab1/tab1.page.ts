import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peso!: string;
  altura!: string;
  resultado!: string;

    constructor() {}

    verificarImc(){


      let p = parseFloat(this.peso);
      let a = parseFloat(this.altura);
      let a_tratada = a/100;
      let imc = p / (a_tratada * a_tratada);

      let result;
if ( a_tratada > 2.3){
    result = "Digite uma altura válida menor que 230"
    this.resultado = result;
    return;
  }else{
    if (imc <= 18.5){
      result = "Baixo Peso"
      this.resultado = result;
    }else if(imc >= 18.5 && imc <= 24.99){
      result = "Peso Normal"
      this.resultado = result;
    }else if(imc >= 25 && imc <= 29.99){
      result = "Acima do Peso "
      this.resultado = result;
    }else if(imc >= 30 && imc <= 34.99){
      result = "Grau 1 de Obsedidade"
      this.resultado = result;
    }else if(imc >= 35 && imc <= 40){
      result = "Grau 2 de Obsedidade"
      this.resultado = result;
    }else{
      result = "Grau 3 de Obsedidade"
      this.resultado = result;
    }

  }
  }




  }

