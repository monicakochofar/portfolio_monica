<script setup>
import { onBeforeMount, reactive, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { getBarChartConfig } from '@/globalPortfolioConfig.js';
import {
  getMonthDiff,
  getEndDate,
  getYears
} from '@/utils/dateRangeFormatter.js';

const props = defineProps({
  companyList: {
    type: Array,
    required: true
  }
});

const state = reactive({
  skillMonthMap: {}
});

onBeforeMount(() => {
  state.skillMonthMap = getMonthsPerSkill(props.companyList);
});

onMounted(() => {
  const chartData = getChartData(state.skillMonthMap);
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

function getMonthsPerSkill(companyList) {
  const map = {};

  companyList.forEach((item) => {
    let { startDate, endDate, stack } = item;
    if (startDate.length !== 7 || endDate.length !== 7) {
      console.error(
        'Please configure globalPortfolioConfig.js with the correct date format'
      );
      return;
    }

    startDate = new Date(startDate.slice(-4), startDate.slice(0, 2));
    endDate = getEndDate(endDate);

    const monthDiff = getMonthDiff(startDate, endDate);
    const years = getYears(monthDiff);

    stack.forEach((stackItem) => {
      map[stackItem] = (map[stackItem] || 0) + years;
    });
  });

  return map;
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
