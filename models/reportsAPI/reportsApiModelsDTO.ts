export interface CandidatesDTO {
  id: number;
  name: string;
  birthday: string;
  email: string;
  education: string;
  avatar: string;
}

export interface CandidatesReportsDTO {
  id: number;
  companyId: number;
  companyName: string;
  interviewDate: string;
  phase: string;
  status: string;
  note: string;
}

export interface UserDTO {
  id: number;
  login: string;
  avatar_url: string;
}
