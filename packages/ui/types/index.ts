import type { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export type Task = {
  name: string;
  status: string;
  owner: string;
  budget: string;
  duration: string;
  startDate: string;
  endDate: string;
};

export interface Workspace {
  isDefault: boolean;
  description: string;
  id: string,
  name: string,
  programs: Program[]
}

export interface Program {
  description: string;
  id: string,
  name: string,
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface SignupPayload extends LoginPayload{
  name: string;
}

export interface RestPasswordPayload extends LoginPayload{
  code: string;
}


