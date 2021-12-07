import { IJogo } from './../model/IJogo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, map } from 'rxjs/operators';

//Injeção de dependencia
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/Jogos';



  constructor(private http: HttpClient, private toastr: ToastrService)/*metodo com classe http que usa o HttpClient*/ { }

  //metodo(tipo) : retorno{codigo}
  buscarTodos() : Observable<IJogo[]> { //Método
    //pipe :  juntas os metodos
    return this.http.get<IJogo[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    ); // O http recebe a URL = 'http://localhost:3000/produtos'

  }

  buscarPorId(id: number) : Observable<IJogo> {
    return this.http.get<IJogo>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


  atualizar( produto: IJogo): Observable<IJogo> {
    return this.http.put<IJogo>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  excluir( id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }


  cadastrar( produto: IJogo): Observable<IJogo> {
    return this.http.post<IJogo>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  //Observable: ele vai ficar observando toda hora para ver se aconteceu alguma mudança
  exibirErro(e: any) : Observable<any> {

    this.exibirMensagem('Erro!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY; //retornar nada (essa função serve para ultilizar o Observable, pois quando não é void ele precisa que retorne algo)
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string) : void {

    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
    //No toastr será exibido mensagem, titulo, botão para fechar, barra com tempo de vizualização e o tipo
  }

}
