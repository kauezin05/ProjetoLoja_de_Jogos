import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJogo } from 'src/app/model/IJogo.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {


  produto: IJogo = {
    nome: '',
    precoProduto: 0,
    faixaEtaria: 0,
    lancamento: new Date(),
    plataformas: '',
    quantidadeMF: 0,
  };

  //Objeto.atributo




  constructor(private produtosService: ProdutosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno => {
      this.produto = retorno;
    })
  }

  salvarProduto(): void {
    this.produtosService.atualizar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema', //titulo
        `${this.produto.nome} foi atualizado com sucesso, ID: ${this.produto.id}`, //mensagem
        'toast-success' //tipo
      );
    });
    this.router.navigate(['/produtos']);

  }

}
