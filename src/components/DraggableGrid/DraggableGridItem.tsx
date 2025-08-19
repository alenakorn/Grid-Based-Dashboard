import React from 'react';
import { useSortable, AnimateLayoutChanges, defaultAnimateLayoutChanges } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { WidgetData } from '../../types/dashboard';
import { DragAndDropIcon, TrashIcon } from '../Icons';

import BarChartWidget from '../Widgets/BarChartWidget';
import LineChartWidget from '../Widgets/LineChartWidget';
import SimpleTextWidget from '../Widgets/SimpleTextWidget';

const WidgetBlock = {
  lineChart: LineChartWidget,
  barChart: BarChartWidget,
  text: SimpleTextWidget,
};

interface Props {
  item: WidgetData;
  onRemove: (id: string) => void;
}

export const DraggableGridItem = ({ item, onRemove }: Props) => {
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
    <li
      ref={setNodeRef}
      className={`gridItem ${isDragging ? 'dragging' : ''}`}
      style={style}
      {...attributes}
    >
      <div className="dragHandle" {...listeners}>
        <DragAndDropIcon/>
      </div>
      <button className="itemDeleteBtn" onClick={() => onRemove(item.id)}>
        <TrashIcon/>
      </button>
      <WidgetComponent {...item} />
    </li>
  );
};
