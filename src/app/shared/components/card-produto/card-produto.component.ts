import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string = '';
  @Input() nomeProduto: string = '';
  @Input() promocao: boolean = true;
  @Input() idProduto: number = 0;
  @Input() lancamento: string = '';
  @Input() precoProduto: number = 0;
  @Input() plataformas: string = '';
  @Input() quantidadeMF: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
