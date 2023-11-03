<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { getBarChartConfig } from '../utils';

const props = defineProps({
  skillMonthMap: {
    type: Object,
    required: true
  }
});

onMounted(() => {
  const chartData = getChartData(props.skillMonthMap);
  const chart = new Chart(
    chartData.ctx,
    getBarChartConfig(chartData.datasets, chartData.textColor)
  );

  document.body.addEventListener('theme-changed', () => {
    const bgColor =
      localStorage.getItem('portfolioTheme') === 'dark' ? '#282828' : '#F2F2F2';
    const textColor =
      localStorage.getItem('portfolioTheme') === 'dark' ? '#F2F2F2' : '#181818';
    const borderColor =
      localStorage.getItem('portfolioTheme') === 'dark' ? '#F2F2F2' : '#181818';

    chart.data.datasets[0].backgroundColor = bgColor;
    chart.data.datasets[0].borderColor = borderColor;
    chart.options.scales.y.ticks.color = textColor;
    chart.options.scales.x.ticks.color = textColor;
    chart.options.scales.x.title.color = textColor;
    chart.options.plugins.title.color = textColor;
    chart.update();
  });
});

function getChartData(skillYearMapping) {
  const ctx = document.getElementById('bar-chart');
  const lastTheme = localStorage.getItem('portfolioTheme');
  const prefersDark =
    !lastTheme &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const showDarkTheme = prefersDark || lastTheme === 'dark';

  const bgColor = showDarkTheme ? '#282828' : '#F2F2F2';
  const textColor = showDarkTheme ? '#F2F2F2' : '#181818';
  const borderColor = showDarkTheme ? '#F2F2F2' : '#181818';
  const datasets = {
    labels: Object.keys(skillYearMapping),
    datasets: [
      {
        label: 'Years',
        data: Object.values(skillYearMapping),
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: 12,
        hoverBackgroundColor: '#181818'
      }
    ]
  };
  return { ctx, datasets, textColor };
}
</script>

<template>
  <div class="container__colored skill-summary" style="margin-top: 50px">
    <div class="skill-summary__chart">
      <canvas id="bar-chart"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/stylesheets/mixins';

.skill-summary {
  display: none;
  overflow: hidden;

  #bar-chart {
    width: 100% !important; // to override chartjs library values
    height: 100% !important;
  }

  &__chart {
    margin: 0 auto;
    max-width: 954px;

    @include mediumScreens {
      max-height: 477px;
      animation: fadeIn 2s forwards;
    }
  }

  @include largeScreens {
    display: block;
  }
}
</style>
