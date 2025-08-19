export type WidgetType = 'lineChart' | 'barChart' | 'text' | 'empty';

export interface WidgetData {
  type: WidgetType;
  id: string;
  data?: ChartData[];
  name?: string;
  description?: string;
}

export type AddWidgetData = Pick<WidgetData, 'type' | 'name' | 'description' | 'data'>;

export interface ChartData {
  name: string;
  pv: number;
  uv: number;
}

export interface DraggableGridItemProps {
  item: WidgetData;
  handleRemove: (id: string) => void;
  isOverlay?: boolean;
  activeItemId?: string;
}

export interface SimpleTextData {
  name?: string;
  description?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}
