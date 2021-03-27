import { createContext, useContext } from 'react';
import {Workspace} from '../types'

// user default workspace Context
export const WorkspaceContext = createContext<Workspace[]>([]);

export function useWorkspaceContext() {
  return useContext(WorkspaceContext);
}
