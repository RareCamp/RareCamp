import { createContext, useContext } from 'react';


// user default workspace Context
export const WorkspaceContext = createContext<>({});

export function useWorkspaceContext() {
  return useContext(WorkspaceContext);
}
