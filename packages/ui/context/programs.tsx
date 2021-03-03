import { createContext, useContext } from 'react';

export const ProgramsContext = createContext({
  programs: []
});

export function useProgramsContext() {
  return useContext(ProgramsContext);
}
