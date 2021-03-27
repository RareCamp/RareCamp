import { createContext, useContext } from "react";
import { Workspace } from "../types";

export const WorkspaceContext = createContext<{ workspaces: Workspace[] }>({
  workspaces: []
});

export function useWorkspaceContext() {
  return useContext(WorkspaceContext);
}
