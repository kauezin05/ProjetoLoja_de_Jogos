import { ProdutosService } from './../../../services/produtos.service';
import { IJogo} from './../../../model/IJogo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

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
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema', //titulo
        `${this.produto.nome} foi cadastrado com sucesso, ID: ${this.produto.id}`, //mensagem
        'toast-success' //tipo
      );
    });
    this.router.navigate(['/produtos']);

  }

}
