import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import './DraggableGrid.css';
import { useDashboard } from '../../hooks';
import { DraggableGridItem } from './DraggableGridItem';

export const DraggableGrid = () => {
  const { blocks, setBlocks } = useDashboard();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleRemove = (id: string) => {
    const updated = blocks.filter(item => item?.id !== id);
    setBlocks(updated);
    sessionStorage.setItem('grid-items', JSON.stringify(updated));
  };

  const handleDragEnd = ({ active, over }: any) => {
    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex(i => i.id === active.id);
      const newIndex = blocks.findIndex(i => i.id === over.id);
      const updated = arrayMove(blocks, oldIndex, newIndex);

      setBlocks(updated);
      sessionStorage.setItem('grid-items', JSON.stringify(updated));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={blocks?.map(i => i.id)}
        strategy={rectSortingStrategy}
      >
        <ul className="gridContainer">
          {blocks?.map((item) => (
            <DraggableGridItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default DraggableGrid;
