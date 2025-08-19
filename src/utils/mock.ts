import { ChartData, WidgetType } from '../types/dashboard';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const getRandomValue = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomChartData = (): ChartData[] => {
  return months.map(month => ({
    name: month,
    pv: getRandomValue(100, 600),
    uv: getRandomValue(100, 600),
  }));
};

export const textBlockData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh nisl, non varius erat scelerisque pretium. Donec purus nibh, vulputate sit amet aliquam quis, consectetur quis diam. Fusce at mattis dui, et interdum massa. Quisque hendrerit mollis purus, vitae efficitur metus finibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo nulla, tincidunt et efficitur sed, vulputate eu enim. Maecenas vitae odio turpis. Quisque ut mi vel nisi faucibus sagittis sit amet vel dolor.';


export const getMockDataSets = (type: WidgetType): ChartData[] => {
  switch (type) {
    case 'lineChart':
    case 'barChart':
      return generateRandomChartData();
    default:
      return [];
  }
};
