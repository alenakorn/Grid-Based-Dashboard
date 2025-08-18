import { createContext, useState, ReactNode } from 'react';
import { AddWidgetData, WidgetData } from '../types/dashboard';
import { mockDataSets } from '../utils/mock';

interface DashboardContextType {
  blocks: WidgetData[];
  gridSize: { cols: number };
  addBlock: (data: AddWidgetData) => void;
  removeBlock: (blockId: string) => void;
}

export const DashboardContext = createContext<DashboardContextType | null>(null);

interface DashboardProviderProps {
  children: ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [blocks, setBlocks] = useState<WidgetData[]>([]);
  const [gridSize] = useState({ cols: 3 });

  const addBlock = async ({ type, name, description }: AddWidgetData) => {
    const newBlock: WidgetData = {
      type,
      id: `block-${Date.now()}-${Math.random()}`,
      name,
      description,
      // @ts-ignore
      data: mockDataSets[type] || [],
    };

    setBlocks(prev => [...prev, newBlock]);
  };

  const removeBlock = async (blockId: string) => {
    setBlocks(prev => prev.filter(block => block.id !== blockId));
  };

  const value: DashboardContextType = {
    blocks,
    gridSize,
    addBlock,
    removeBlock,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
