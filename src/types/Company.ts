export interface Company {
  id: string;
  stage: CompanyStage;
  logo_URL: string;
  location: string;
}

export type CompanyStage =
  | "INITIATED"
  | "QUALIFIED"
  | "CONTRACT_SENT"
  | "NEGOTIATING"
  | "CLOSED_WON"
  | "CLOSED_LOST";
