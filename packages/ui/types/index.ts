import type { ReactNode } from 'react'

export interface ChildrenProps {
  children: ReactNode
}

export type Task = {
  name: string
  status: string
  owner: string
  budget: string
  duration: string
  startDate: string
  endDate: string
}

export interface Workspace {
  isDefault: boolean
  description: string
  id: string
  name: string
  programs: Program[]
}

export interface Program {
  description: string
  id: string
  name: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface SignupPayload extends LoginPayload {
  name: string
}

export interface RestPasswordPayload extends LoginPayload {
  code: string
}

export enum ProteinSize {
  LESS_THAN_1100 = 'LESS_THAN_1100',
  MORE_THAN_1100 = 'MORE_THAN_1100',
  NOT_SURE = 'NOT_SURE',
}

export enum MutationType {
  LEADS_TO_LOSS = 'LEADS_TO_LOSS',
  LEADS_TO_GAIN = 'LEADS_TO_GAIN',
  LEADS_TO_MORE = 'LEADS_TO_MORE',
  NOT_SURE = 'NOT_SURE',
}

export interface Questionnaire {
  causalGene: string
  disease: string
  mutationType: MutationType
  foundation: string
  proteinSize: ProteinSize
}

export enum TaskStatuses {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in-progress',
  NOT_STARTED = 'not-started',
}
