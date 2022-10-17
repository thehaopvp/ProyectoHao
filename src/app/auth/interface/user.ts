export interface UserLogin {
  nombre: string;
  password: string;
}

export interface regiUser {
  nombre: string;
  password: string;

}

export interface Response {
  status: string;
  response: string;
}


export interface TokenResponse {
  accessToken: string;
}
