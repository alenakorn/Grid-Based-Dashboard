import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { WidgetData } from '../../types/dashboard';

const LineChartWidget = ({data, name, description }: WidgetData) => {
  return (
    <>
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
      <ResponsiveContainer width="100%" height={494}>
        <LineChart
          data={data}
          margin={{
            left: -20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#e07a5f" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="uv" stroke="#81b29a" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartWidget;
