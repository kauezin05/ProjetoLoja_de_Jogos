import { IJogo } from './../../../model/IJogo.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {


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
