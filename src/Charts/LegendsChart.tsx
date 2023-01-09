import { useEffect } from 'react';
import Chart
// , { LineController, LineElement, PointElement, CategoryScale, LinearScale } 
from 'chart.js/auto';
import type { ChartConfiguration } from 'chart.js';
import type { Legend } from '../types/player.interface';

import './LegendsChart.scss';

interface ChartProps {
  legends: Legend[];
}

const nameSort = (a: Legend, b: Legend) => {
  return (a.legend_name_key > b.legend_name_key) ? 1 : ((a.legend_name_key < b.legend_name_key) ? -1 : 0)
}

const LegendsChart = ({ legends }: ChartProps) => {
  
  
  useEffect(() => {
    const ctx = document.getElementById('legendsChart') as HTMLCanvasElement;
    const sortedLegends = legends.sort(nameSort);
    const labels = sortedLegends.map(legend => legend.legend_name_key);
    const koFallRatio = sortedLegends.map(legend => {
      if (legend.falls === 0) return 0;
      return legend.kos / legend.falls;
    });
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: koFallRatio
        }]
      }
    }
    const chart = new Chart(ctx, config);

    return () => {
      chart.destroy();
    }
  })

  return (
    <div className='legendsChart'>
      top
      <canvas id='legendsChart' className='chart'></canvas>
      bottom
    </div>
  )
}

export default LegendsChart;