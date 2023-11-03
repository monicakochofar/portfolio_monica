/*
  useage:
  <script setup lang="ts">
    import { useDevice, DEVICE_SIZE } from '@/utils/screenSizeHelper'

    const device = useDevice()
  </script>

  <template>
    <div v-if="device.size > DEVICE_SIZE.s">Some large screen content</div>
  </template>
*/

import { reactive } from 'vue';
import { DEVICE_BREAKPOINTS } from '@/globalPortfolioConfig.js';

export const DEVICE_SIZE = { xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl' };

const calcSize = (width) => {
  if (width < DEVICE_BREAKPOINTS.widthXS) return DEVICE_SIZE.xs;
  if (width < DEVICE_BREAKPOINTS.widthS) return DEVICE_SIZE.s;
  if (width < DEVICE_BREAKPOINTS.widthM) return DEVICE_SIZE.m;
  if (width < DEVICE_BREAKPOINTS.widthL) return DEVICE_SIZE.l;
  return DEVICE_SIZE.xl;
};

const deviceInfo = reactive({
  windowWidth: window.innerWidth,
  size: DEVICE_SIZE.xs
});

deviceInfo.size = calcSize(window.innerWidth);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  deviceInfo.windowWidth = width;
  deviceInfo.size = calcSize(width);
});

export const useDevice = () => {
  return deviceInfo;
};

export default useDevice;
