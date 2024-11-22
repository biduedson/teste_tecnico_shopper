export interface IHttpResponseSucces<T> {
  StatusCode: number;
  Descricao: string;
  Resposta: T;
}
