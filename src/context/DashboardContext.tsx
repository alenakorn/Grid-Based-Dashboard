import { createContext, useState, ReactNode } from 'react';
import { AddWidgetData, WidgetData } from '../types/dashboard';
import { mockDataSets } from '../utils/mock';

interface DashboardContextType {
  blocks: WidgetData[];
  handleAddBlock: (data: AddWidgetData) => void;
  setBlocks: (data: WidgetData[]) => void;
}

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const initial = sessionStorage.getItem('grid-items');
  const [blocks, setBlocks] = useState<WidgetData[]>(initial ? JSON.parse(initial) : []);

  const handleAddBlock = async ({ type, name, description }: AddWidgetData) => {
    const newBlock: WidgetData = {
      id: `block-${Date.now()}-${Math.random()}`,
      type,
      name,
      description,
      // @ts-ignore
      data: mockDataSets[type] || [],
    };

    const updatedBlocks = [...blocks];
    const emptyIndex = updatedBlocks.findIndex(b => b === null);

    if (emptyIndex !== -1) {
      updatedBlocks[emptyIndex] = newBlock;
    } else {
      updatedBlocks.push(newBlock);
    }

    setBlocks(updatedBlocks);
    sessionStorage.setItem('grid-items', JSON.stringify(updatedBlocks));
  };

  const value: DashboardContextType = {
    blocks,
    setBlocks,
    handleAddBlock,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
