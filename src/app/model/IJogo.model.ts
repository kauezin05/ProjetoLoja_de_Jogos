//Interface
//Serve para receber as informções do JSON do BackEnd

export interface IJogo{

  id?: number;
  nome: string;
  precoProduto: number;
  faixaEtaria: number;
  lancamento: Date;
  plataformas: string;
  quantidadeMF: number; //quantidade Midia física


}
