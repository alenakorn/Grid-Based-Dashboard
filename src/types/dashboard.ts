export type WidgetType = 'lineChart' | 'barChart' | 'text';

export interface WidgetData {
  type: WidgetType;
  id: string;
  data: ChartData[];
  name?: string;
  description?: string;
}

export type AddWidgetData = Pick<WidgetData, 'type' | 'name' | 'description'>;

export interface ChartData {
  name: string;
  pv: number;
  uv: number;
}

export interface GridProps {
  items: WidgetData[];
  columns: number;
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
