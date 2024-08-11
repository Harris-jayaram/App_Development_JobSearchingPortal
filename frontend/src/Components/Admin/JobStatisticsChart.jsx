// src/Components/Admin/JobStatisticsChart.jsx
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const JobStatisticsChart = () => {
  return (
    <div>
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Week 1', 'Week 2', 'Week 3'] }]}
        series={[{ data: [10, 15, 20] }, { data: [5, 10, 15] }, { data: [8, 12, 18] }]}
        width={500}
        height={300}
      />
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 30, label: 'Software Engineering' },
              { id: 1, value: 40, label: 'Marketing' },
              { id: 2, value: 30, label: 'Other' },
            ],
          },
        ]}
        width={380}
        height={280}
        padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
        innerRadius={50}
      />
    </div>
  );
};

export default JobStatisticsChart;
