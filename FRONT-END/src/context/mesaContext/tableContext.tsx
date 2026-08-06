import { createContext } from 'react';

export type TableContextData = {
  cdMesa: number ;
  setCdMesa: (mesa: number ) => void;
};

export const TableContext = createContext({} as TableContextData);