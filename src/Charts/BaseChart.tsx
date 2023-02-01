import { useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';
import { PlayerContext } from '../Context/PlayerContext';
import type { ChartConfiguration } from 'chart.js';

import './BaseChart.scss';

type type = 'line' | 'bar' | 'pie';

interface ChartProps {
  type: type;
  labels: string[];
  data: number[];
}

// Chart needs the following props in all cases
// type - string 'line'
// labels - string[] ['orion', 'magyar', 'wu shang']
// data - number[] [1, 2, 3]

const BaseChart = ({ type, labels, data }: ChartProps) => {

  const player = useContext(PlayerContext);

  useEffect(() => {
    const ctx = document.getElementById('statsChart') as HTMLCanvasElement;
    const config: ChartConfiguration = {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          data: data
        }]
      }
    }
    const chart = new Chart(ctx, config);
    return () => {
      chart.destroy();
    }
  });

  return (
    <div className='statsChart'>
      <canvas id='statsChart' className='chart'></canvas>
    </div>
  )
}

export default BaseChart;