import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  arraySwap,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import { useDashboard } from '../../hooks';
import { WidgetData } from '../../types/dashboard';

import { DraggableGridItem } from './DraggableGridItem';

import './DraggableGrid.css';

export const DraggableGrid = () => {
  const { blocks, withEmptyCells, setBlocks, handleRemove } = useDashboard();

  const [activeItem, setActiveItem] = useState<WidgetData | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    const item = blocks.find((b) => b.id === active.id);
    if (item) {
      setActiveItem(item);
    }
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveItem(null);

    const isOverNonEmptyCell = blocks.findIndex(i => i.id === over?.id && i.type !== 'empty') > -1;
    if (withEmptyCells && isOverNonEmptyCell) {
      return;
    }

    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex(i => i.id === active.id);
      const newIndex = blocks.findIndex(i => i.id === over.id);

      const updated = withEmptyCells
        ? arraySwap(blocks, oldIndex, newIndex)
        : arrayMove(blocks, oldIndex, newIndex);

      setBlocks(updated);
      sessionStorage.setItem('grid-items', JSON.stringify(updated));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={blocks?.map(i => i.id)}
        strategy={rectSortingStrategy}
      >
        <ul className="gridContainer">
          {blocks?.map((item) => (
            <DraggableGridItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
              activeItemId={activeItem?.id}
            />
          ))}
        </ul>
      </SortableContext>

      <DragOverlay>
        {activeItem ? (
          <DraggableGridItem item={activeItem} handleRemove={handleRemove} isOverlay/>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableGrid;