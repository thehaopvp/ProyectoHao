export interface capitulos {
  id?: number;
  titulo: string;
  imagenes?: string;
  id_comic?: number;
}

export interface capitulosResponse {
  capitulo: capitulos[];
}

export interface capituloResponse {
  capitulo: capitulos;
}
