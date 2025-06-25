export type CompanyStage =
  | "initiated"
  | "qualified"
  | "contract sent"
  | "negotiating"
  | "closed won"
  | "closed lost";

export interface Company {
  name: string;
  _id: string;
  location: string;
  logoURL: string;
  status: string;
  createdAt?: string;
  pointOfContact?: string;
  phoneNumber?: string;
  email?: string;
}

export interface Company4DnD {
  id: string;
  name: string;
  location: string;
  status: CompanyStage;
}

export type CompanyColumn = {
  id: CompanyStage;
  title: string;
};
