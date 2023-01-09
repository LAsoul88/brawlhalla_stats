import { useRef, useEffect } from 'react';
import Chart
// , { LineController, LineElement, PointElement, CategoryScale, LinearScale } 
from 'chart.js/auto';
import type { ChartConfiguration } from 'chart.js';
import type { Legend } from '../types/player.interface';

import './LegendsChart.scss';

interface ChartProps {
  legends: Legend[];
}

const LegendsChart = ({ legends }: ChartProps) => {
  
  const legendsChart = useRef(null);
  const ctx = document.getElementById('legendsChart') as HTMLCanvasElement;
  const labels = legends.map(legend => legend.legend_name_key);
  const config: ChartConfiguration = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        data: [2, 3, 4]
      }]
    }
  }

  useEffect(() => {
    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    }
  })

  return (
    <div className='legendsChart'>
      top
      <canvas id='legendsChart' ref={legendsChart} className='chart'></canvas>
      bottom
    </div>
  )
}

export default LegendsChart;