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
  dicas!: string;
  results!: string;
  imcRes!: string;
  constructor() {
  }
  verificarImc() {

    let p = parseFloat(this.peso);
    let a = parseFloat(this.altura);
    let a_tratada = a / 100;
    let imc = p / (a_tratada * a_tratada);

    let result;
    let results;
    if (a_tratada > 2.3) {
      result = "Digite uma altura válida menor que 230"
      this.resultado = result;
      return;
    } else if (p <= 0) {
      result = "Digite algum peso diferente de zero (0)"
      this.resultado = result;
      return;
    } else {
      if (imc <= 18.5) {
        result = "Baixo Peso"
        this.resultado = result;

        console.log()
      } else if (imc >= 18.5 && imc <= 24.99) {
        result = "Peso Normal"
        this.resultado = result;
        const str ="Seu IMC é de: " + imc.toString();
        this.imcRes = str;
      } else if (imc >= 25 && imc <= 29.99) {
        result = "Acima do Peso"
        this.resultado = result;
        const str = "Seu IMC é de: " + imc.toString();
        this.imcRes = str;
      } else if (imc >= 30 && imc <= 34.99) {
        result = "Grau 1 de Obesedidade"
        this.resultado = result;
        const str = "Seu IMC é de: " + imc.toString();
        this.imcRes = str;
      } else if (imc >= 35 && imc <= 40) {
        result = "Grau 2 de Obesedidade"
        this.resultado = result;
        const str ="Seu IMC é de: " + imc.toString();
        this.imcRes = str;
      } else {
        result = "Grau 3 de Obesedidade"
        this.resultado = result;
        const str ="Seu IMC é de: " + imc.toString();
        this.imcRes = str;
      }


      if (result === "Baixo Peso") {
        results = "Pessoas que estão abaixo do peso recomendável podem apresentar quadros de desnutrição. Além disso, é importante verificar se não há alguma patologia por trás do peso baixo, principalmente se o emagrecimento aconteceu de maneira repentina. Deficiências nutricionais, distúrbios alimentares, como anorexia, consumo excessivo de álcool e drogas, além do tabagismo, podem estar associados ao baixo peso. Tal condição pode provocar sintomas fisiológicas perceptíveis, como unhas fracas e quebradiças, irritabilidade, dores de cabeça, dor nas articulações, falta de concentração, entre outros sinais."
        this.results = results;
      } else if (result === "Peso Normal") {
        results = "Continue assim."
        this.results = results;
      } else if (result === "Acima do Peso") {
        results = "Escolha a dieta certa para perder peso para entrar no déficit calórico: É essencial entrar em déficit calórico para queimar gordura armazenada"
        this.results = results;
      } else if (result === "Grau 1 de Obesidade") {
        results = "O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Além disso, é preciso que o paciente realize as atividades com o acompanhamento de um profissional de educação física."
        this.results = results;

      } else if (result === "Grau 2 de Obesidade") {
        results = "Porém, devido ao estado de obesidade, a cirurgia apresenta alguns riscos como sangramento, eventos tromboembólicos e vasculares. Por isso, Lia ressalta a importância do acompanhamento médico e da realização do procedimento com uma equipe correta e experiente."
        this.results = results;

      } else {
        results = "Pessoas com obesidade mórbida e comorbidades, como diabetes e hipertensão, podem optar por fazer a cirurgia de redução de estômago para controlar o peso e sair da obesidade. Existem quatro técnicas diferentes de cirurgia bariátrica para obesidade reconhecidas pelo Conselho Federal de Medicina (CFM): Banda Gástrica Ajustável, Gastrectomia Vertical, Bypass Gástrico e Derivação Bileopancreática."
        this.results = results;
      }

    }
  }




}

