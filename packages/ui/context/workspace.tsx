import { createContext, useContext } from 'react'

export const WorkspaceContext = createContext<any>({workspace: {}});

export function useWorkspaceContext() {
  return useContext(WorkspaceContext);
}
