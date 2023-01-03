export interface capitulos {
  id?: number;
  titulo: string;
  imagenes?: string;
  id_comic?: number;
}

export interface capitulosResponse {
  capitulos: capitulos[];
}

export interface capituloResponse {
  capitulos: capitulos;
}
