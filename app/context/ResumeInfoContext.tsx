import { createContext } from "react";

interface ResumeInfoContextType {
  resumeinfo: any;
  setResumeInfo: (info: any) => void;
}

const defaultContextValue: ResumeInfoContextType = {
  resumeinfo: {}, // Provide an initial structure
  setResumeInfo: () => {},
};

export const ResumeinfoContext =
  createContext<ResumeInfoContextType>(defaultContextValue);
