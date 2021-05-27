<template>
  <div class="advertisement">
    <div class="advertisement__title">
      {{ item.title }}
    </div>
    <div class="advertisement__text">
      {{ item.text }}
    </div>
    <div
      class="button advertisement__button"
      @click="item.button.action"
    >
      {{ item.button.text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { IAdvertisement } from '@/types'

export default Vue.extend({
  name: 'Advertisement',
  props: {
    item: {
      type: Object as () => IAdvertisement,
      required: true,
    },
  },
})
</script>

<style lang="stylus" scoped>
.advertisement
  background-color: #262626
  color: white
</style>
