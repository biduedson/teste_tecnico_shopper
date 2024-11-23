export interface IHttpResponse<T> {
  StatusCode: number;
  Descricao: string;
  Resposta: T;
}
