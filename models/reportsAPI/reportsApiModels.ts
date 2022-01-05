export interface Candidates {
  id: number;
  name: string;
  birthday: string;
  email: string;
  education: string;
  avatar: string;
}

export interface CandidatesReports {
  id: number;
  companyId: number;
  companyName: string;
  interviewDate: string;
  phase: string;
  status: string;
  note: string;
}

export interface User {
  id: number;
  login: string;
  avatarUrl: string;
}
