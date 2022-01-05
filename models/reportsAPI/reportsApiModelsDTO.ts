export interface CandidatesDTO {
  id: number;
  name: string;
  birthday: string;
  email: string;
  education: string;
  avatar: string;
}

export interface UsersRepositoriesDTO {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export interface UserDTO {
  id: number;
  login: string;
  avatar_url: string;
}
