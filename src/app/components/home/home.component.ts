import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = "";//NOME : TIPO = CONTEUDO
  anuncio: string = ``; // esse tipo de váriavel se chama string template
  idProduto: number = 0;
  precoProduto: number = 0;
  promocao: boolean = false;
  foto: string = '';
  datavalidade : string =''


  constructor() {

  }

  ngOnInit(): void {
  }

}
