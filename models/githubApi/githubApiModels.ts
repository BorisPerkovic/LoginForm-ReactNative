export interface AllRepositories {
  id: number;
  name: string;
  owner: { avatarUrl: string; login: string };
  fullName: string;
}

export interface UsersRepositories {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  language: string;
}

export interface User {
  id: number;
  login: string;
  avatarUrl: string;
}
