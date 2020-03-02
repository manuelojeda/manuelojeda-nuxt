<template>
  <div class="nav-section z-40">
    <desktop-nav class="hidden md:block" :header="header" />
    <mobile-nav class="md:hidden" :header="header" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import DesktopNav from './Desktop.vue'
import MobileNav from './Mobile.vue'
import useGetIsMobile from '~/hooks/useGetIsMobile'

export default defineComponent({
  name: 'NavigationBar',
  components: {
    DesktopNav,
    MobileNav
  },
  props: {
    header: {
      type: Object
    }
  },
  setup () {
    const isMobile = ref<boolean>(false)
    const getIsMobile = () => {
      isMobile.value = useGetIsMobile()
    }

    if (process.client) {
      document.addEventListener('DOMContentLoaded', getIsMobile)
      window.addEventListener('resize', getIsMobile)
    }

    return {
      isMobile
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-section {
  top: 0;
}
</style>
