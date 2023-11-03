<script setup>
import { ref } from 'vue';
import ItemBlocks from '@/components/itemBlocks.vue';
import SkillSummary from '@/components/skillSummary.vue';
import { COMPANY_LIST } from '@/globalPortfolioConfig.js';

const companyList = ref(COMPANY_LIST);
</script>

<template>
  <div>
    <SkillSummary :companyList="companyList" />
    <ItemBlocks :itemList="companyList" />
  </div>
</template>
