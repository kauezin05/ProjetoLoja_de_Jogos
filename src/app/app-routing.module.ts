import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/produtos/cadastrar-produto/cadastrar-produto.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBlackComponent } from './components/home-black/home-black.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'produtos/cadastrar', component:CadastrarProdutoComponent},
  {path:'produtos/atualizar/:id', component:AtualizarProdutoComponent},
  {path:'black-natal', component:HomeBlackComponent},
  {path:'carrinho', component:CarrinhoComponent},
  {path:'sobre', component:SobreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
