export interface LineChartData {
  name: string;
  pv: number;
  uv: number;
}

export const chartData: LineChartData[] = [
  {
    name: 'Jan',
    pv: 240,
    uv: 400,
  },
  {
    name: 'Feb',
    pv: 139,
    uv: 300,
  },
  {
    name: 'Mar',
    pv: 480,
    uv: 200,
  },
  {
    name: 'Apr',
    pv: 390,
    uv: 278,
  },
  {
    name: 'May',
    pv: 480,
    uv: 189,
  },
  {
    name: 'Jun',
    pv: 380,
    uv: 239,
  },
  {
    name: 'Jul',
    pv: 430,
    uv: 349,
  },
];

export const textBlockData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit nibh nisl, non varius erat scelerisque pretium. Donec purus nibh, vulputate sit amet aliquam quis, consectetur quis diam. Fusce at mattis dui, et interdum massa. Quisque hendrerit mollis purus, vitae efficitur metus finibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam justo nulla, tincidunt et efficitur sed, vulputate eu enim. Maecenas vitae odio turpis. Quisque ut mi vel nisi faucibus sagittis sit amet vel dolor.';

export const mockDataSets = {
  lineChart: chartData,
  barChart: chartData,
  textBlocks: textBlockData
};
