import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable, AnimateLayoutChanges, defaultAnimateLayoutChanges } from '@dnd-kit/sortable';
import { useDashboard } from '../../hooks';

import { DraggableGridItemProps } from '../../types/dashboard';
import { DragAndDropIcon, TrashIcon } from '../Icons';

import { BarChartWidget, LineChartWidget, SimpleTextWidget } from '../Widgets';

const WidgetBlock = {
  lineChart: LineChartWidget,
  barChart: BarChartWidget,
  text: SimpleTextWidget,
  empty: () => <div className="emptyWidget"/>,
};

export const DraggableGridItem = ({ item, isOverlay, handleRemove, activeItemId }: DraggableGridItemProps) => {
  const { withEmptyCells } = useDashboard();

  const animateLayoutChanges: AnimateLayoutChanges = ({ wasDragging, ...args }) => {
    if (item.type !== 'empty') return false;
    return defaultAnimateLayoutChanges({ ...args, wasDragging: false });
  };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, animateLayoutChanges });

  const isActive = activeItemId === item.id;
  const style: React.CSSProperties =
    withEmptyCells && !isActive
      ? {}
      : {
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
