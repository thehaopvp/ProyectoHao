export interface comics {
  id?: number;
  titulo: string;
  portada?: string;
  descripcion: string;
  capitulos:string;
}

export interface ComicsResponse {
  comic: comics[];
}

export interface ComicResponse {
  comic: comics;
}
