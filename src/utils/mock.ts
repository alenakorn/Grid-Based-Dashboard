export interface LineChartData {
  name: string;
  pv: number;
  uv: number;
}

export interface TextBlockData {
  title: string;
  content: string;
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

export const textBlockData: TextBlockData[] = [
  {
    title: 'Sales Summary',
    content: 'Total sales for this quarter have increased by 15% compared to the previous quarter. Our team has exceeded the target by $50,000.'
  },
  {
    title: 'Project Status',
    content: 'Dashboard development is 80% complete. Remaining tasks include testing, performance optimization, and final review.'
  },
  {
    title: 'Team Updates',
    content: 'We have successfully onboarded 3 new team members this month. Training sessions are scheduled for next week.'
  },
  {
    title: 'Performance Metrics',
    content: 'Website traffic has increased by 23% this month. Average session duration is 4.5 minutes, up from 3.2 minutes last month.'
  },
  {
    title: 'Important Notice',
    content: 'System maintenance is scheduled for this weekend from 2 AM to 6 AM. All services will be temporarily unavailable during this time.'
  }
];

export const mockDataSets = {
  lineChart: chartData,
  barChart: chartData,
  textBlocks: textBlockData
};
