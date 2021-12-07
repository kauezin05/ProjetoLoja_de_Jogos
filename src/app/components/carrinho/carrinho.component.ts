import { Component, OnInit } from '@angular/core';
import { IJogo } from 'src/app/model/IJogo.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  listarJogos: IJogo[] = [];

  constructor(private produtosService: ProdutosService) {

  }
  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos() : void{
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listarJogos = retorno;
    })
  };

  //é preciso de ! depois do id, pois o id pode ser null
  deletar(produto: IJogo) : void {

    this.produtosService.excluir(produto.id!).subscribe(() => {

      this.produtosService.exibirMensagem(

        'Sistema',

        `${produto.nome} foi excluido com sucesso.`,

        'toast-success'

      );

    });
  };
}
