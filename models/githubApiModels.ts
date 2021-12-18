export interface AllRepositories {
  id: number;
  name: string;
  owner: { avatar_url: string; login: string };
  full_name: string;
}

export interface UsersRepositories {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}
