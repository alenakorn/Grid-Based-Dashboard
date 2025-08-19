import { createContext, useState, ReactNode } from 'react';
import { AddWidgetData, WidgetData, WidgetType } from '../types/dashboard';
import { isWithEmptyCellsEnabled } from '../utils/isWithEmptyCellsEnabled';
import { mockDataSets } from '../utils/mock';

interface DashboardContextType {
  withEmptyCells: boolean;
  blocks: WidgetData[];
  handleAddBlock: (data: AddWidgetData) => void;
  handleRemove: (id: string) => void;
  setBlocks: (data: WidgetData[]) => void;
}

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const withEmptyCells = isWithEmptyCellsEnabled();
  const initial = sessionStorage.getItem('grid-items');
  const [blocks, setBlocks] = useState<WidgetData[]>(initial ? JSON.parse(initial) : []);

  const handleAddBlock = async ({ type, name, description }: AddWidgetData) => {
    const newBlock: WidgetData = {
      id: `block-${Date.now()}-${Math.random()}`,
      type,
      name,
      description,
      data: type !== 'text' && type !== 'empty' ? mockDataSets[type] : [],
    };

    let updatedBlocks = [...blocks];

    if (withEmptyCells) {
      const emptyIndex = updatedBlocks.findIndex((b) => b.type === 'empty');
      if (emptyIndex !== -1) {
        updatedBlocks[emptyIndex] = newBlock;
      } else {
        updatedBlocks.push(newBlock);
      }

      const remainder = updatedBlocks.length % 3;
      if (remainder !== 0) {
        const emptyCount = 3 - remainder;
        const emptyBlocks: WidgetData[] = Array.from({ length: emptyCount }, () => ({
          id: `empty-${Date.now()}-${Math.random()}`,
          type: 'empty',
          name: '',
          description: '',
          data: [],
        }));
        updatedBlocks = [...updatedBlocks, ...emptyBlocks];
      }
    } else {
      updatedBlocks.push(newBlock);
    }

    setBlocks(updatedBlocks);
    sessionStorage.setItem('grid-items', JSON.stringify(updatedBlocks));
  };

  const handleRemove = (id: string) => {
    let updated: WidgetData[];

    if (withEmptyCells) {
      updated = blocks.map(item => {
        if (item?.id === id) {
          return { id: item.id, type: 'empty' as WidgetType };
        }
        return item;
      });
    } else {
      updated = blocks.filter(item => item?.id !== id);
    }

    setBlocks(updated);
    sessionStorage.setItem('grid-items', JSON.stringify(updated));
  };

  const value: DashboardContextType = {
    withEmptyCells,
    blocks,
    setBlocks,
    handleAddBlock,
    handleRemove,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
