//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IJogo{

  id?: number;
  nome: string;
  precoProduto: number;
  faixaEtaria: number;// idade para jogar o Jogo
  lancamento: Date;// data de lançamento do Jogo
  plataformas: string;//plataformas que podem rodar o Jogo
  quantidadeMF: number; //quantidade Midia física


}
