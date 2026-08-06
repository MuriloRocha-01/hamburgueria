import React, { useState, type ReactNode } from 'react';
import { TableContext } from './tableContext';

interface TableProviderProps {
  children: ReactNode;
}

function TableProvider({ children }: TableProviderProps) {
  const [cdMesa, setCdMesa] = useState<number>(0);

  return (
    <TableContext.Provider
      value={{
        cdMesa,
        setCdMesa,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export default TableProvider;