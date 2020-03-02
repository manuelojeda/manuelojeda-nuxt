<template>
  <div class="my-0 menu">
    <ul class="text-white flex">
      <li v-for="(item, index) in social" :key="index" class="mx-2">
        <a :href="item.url" target="_blank" :title="item.title">
          <font-awesome-icon class="text-xl" :icon="['fab', item.icon]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavSocialMedia',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    social: {
      type: Array
    }
  }
})
</script>

<style lang="scss" scoped>
.text-white.flex {
  margin-top: .5rem;
  @media(min-width: 768px) {
    margin-top: 0;
  }
}
</style>
