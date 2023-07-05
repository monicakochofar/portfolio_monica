<script setup>
import { ref } from 'vue';
import ItemBlocks from './itemBlocks.vue';
import { COMPANY_LIST } from './utils';

const companyList = ref(COMPANY_LIST);
</script>

<template>
  <ItemBlocks :itemList="companyList" />
</template>
