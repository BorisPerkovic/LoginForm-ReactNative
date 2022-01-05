export interface Candidates {
  id: number;
  name: string;
  birthday: string;
  email: string;
  education: string;
  avatar: string;
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
