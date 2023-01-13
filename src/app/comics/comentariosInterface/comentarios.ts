import { User } from "../../auth/interface/user";

export interface Comentarios {
  id?: number;
  comentario: string;
  fecha?: Date;
  id_comic?: number;
  id_usuario?: number;
  usuario?:User;
}

export interface ComentariosResponse {
  comentario: Comentarios[];
}

export interface ComentarioResponse {
  Comentarios: Comentarios;
}
