export interface User {
  id?: number;
  nombre: string;
  password: string;
  imagen?: string;
}

export interface UserLogin {
  nombre: string;
  password: string;
}

export interface regiUser {
  nombre: string;
  password: string;
  imagen: string;
}

export interface Response {
  status: string;
  response: string;
}

export interface TokenResponse {
  token: string;
}

export interface UserResponse {
  user: User;
}
