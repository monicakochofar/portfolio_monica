<script setup>
import { ref, onBeforeMount } from 'vue';
import ItemBlocks from './components/itemBlocks.vue';
import SkillSummary from './components/skillSummary.vue';
import { COMPANY_LIST } from './utils';

const companyList = ref(COMPANY_LIST);
const skillMonthMap = ref({});

onBeforeMount(() => {
  skillMonthMap.value = getMonthsPerSkill(companyList.value);
});

function getMonthsPerSkill(companyList) {
  const map = {};

  companyList.forEach((item) => {
    let { startDate, endDate, stack } = item;
    if (startDate.length !== 7 || endDate.length !== 7) {
      console.error('Please configure utils.js with the correct date format');
      return;
    }

    startDate = new Date(startDate.slice(-4), startDate.slice(0, 2));
    endDate = getEndDate(endDate);

    const monthDiff = getMonthDiff(startDate, endDate);
    const years = getYears(monthDiff);

    stack.forEach((stackItem) => {
      if (stackItem === 'Angular 2+' || stackItem === 'AngularJS') {
        map['AngularJS / Angular2+'] =
          (map['AngularJS / Angular2+'] || 0) + years;
      } else {
        map[stackItem] = (map[stackItem] || 0) + years;
      }
    });
  });

  map['Java'] = map['Java'] - 2;

  return map;
}

function getMonthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

function getEndDate(endDate) {
  if (endDate === 'Current') {
    return new Date();
  }
  return new Date(endDate.slice(-4), endDate.slice(0, 2));
}

function getYears(months) {
  let years = 0;
  if (months > 12) {
    years = +(months / 12).toFixed(2);
  } else if (months === 12) {
    years = 1;
  } else {
    years = +(months * 0.084).toFixed(2);
  }

  return years;
}
</script>

<template>
  <div>
    <SkillSummary :skillMonthMap="skillMonthMap" />
    <ItemBlocks :itemList="companyList" />
  </div>
</template>
