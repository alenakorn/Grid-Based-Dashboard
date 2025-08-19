import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { WidgetData } from '../../types/dashboard';

const BarChartWidget = ({ data, name, description }: WidgetData) => {
  return (
    <>
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
      <ResponsiveContainer width="100%" height={494}>
        <BarChart
          data={data}
          margin={{
            right: 0,
            left: -20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#e07a5f" />
          <Bar dataKey="uv" fill="#81b29a" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartWidget;
