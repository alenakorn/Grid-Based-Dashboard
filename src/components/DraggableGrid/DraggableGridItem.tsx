import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable, AnimateLayoutChanges, defaultAnimateLayoutChanges } from '@dnd-kit/sortable';

import { DraggableGridItemProps } from '../../types/dashboard';
import { DragAndDropIcon, TrashIcon } from '../Icons';

import BarChartWidget from '../Widgets/BarChartWidget';
import LineChartWidget from '../Widgets/LineChartWidget';
import SimpleTextWidget from '../Widgets/SimpleTextWidget';

const WidgetBlock = {
  lineChart: LineChartWidget,
  barChart: BarChartWidget,
  text: SimpleTextWidget,
};

export const DraggableGridItem = ({ item, isOverlay, handleRemove }: DraggableGridItemProps) => {
  const animateLayoutChanges: AnimateLayoutChanges = (args) =>
    defaultAnimateLayoutChanges({ ...args, wasDragging: true });

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, animateLayoutChanges });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const WidgetComponent = WidgetBlock[item.type];

  return (
    <>
      <li
        style={style}
        ref={setNodeRef}
        className={[
          'gridItem',
          isDragging && 'dragging',
          isOverlay && 'overlay',
        ].filter(Boolean).join(' ')}
        {...attributes}
      >
        <div className="itemDragBtn" {...listeners}>
          <DragAndDropIcon/>
        </div>
        <button
          className="itemDeleteBtn"
          onClick={() => handleRemove(item.id)}
        >
          <TrashIcon/>
        </button>
        <WidgetComponent {...item} />
      </li>
    </>
  );
};
