export type CompanyStage =
  | "INITIATED"
  | "QUALIFIED"
  | "CONTRACT_SENT"
  | "NEGOTIATING"
  | "CLOSED_WON"
  | "CLOSED_LOST";

export interface Company {
  id: string;
  stage: CompanyStage;
  logo_URL: string;
  location: string;
}

export interface Company4DnD {
  id: string;
  compName: string;
  location: string;
  status: CompanyStage;
}

export type CompanyColumn = {
  id: CompanyStage;
  title: string;
};
