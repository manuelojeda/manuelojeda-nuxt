<template>
  <div>
    this is the main navbar
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavigationBar',
  props: {
    menu: {
      type: Array
    },
    social: {
      type: Array
    }
  }
})
</script>

<style scoped>

</style>
