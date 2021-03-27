import { createContext, useContext } from 'react';
import {Workspace} from '../types'

export const WorkspaceContext = createContext<Workspace[]>([]);

export function useWorkspaceContext() {
  return useContext(WorkspaceContext);
}
