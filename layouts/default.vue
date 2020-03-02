<template>
  <div>
    <section class="nav-section fixed w-full">
      <navi-bar
        :header="header"
      />
    </section>
    <section class="content bg-gray-200">
      <div class="container mx-auto">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, onServerPrefetch, ref } from '@vue/composition-api'
import NaviBar from '~/components/Nav/Index.vue'
import useFetchInitialData from '~/hooks/useFetchInitialData'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    NaviBar
  },
  setup (props, context) {
    const header: any = ref({})

    onServerPrefetch(async () => {
      const responseMenu = await context.root.$axios({
        url: 'http://localhost:1337/menus'
      })

      const responseSocial = await context.root.$axios({
        url: 'http://localhost:1337/social-medias'
      })

      header.value.menu = await responseMenu.data
      header.value.social = await responseSocial.data
    })

    const fetchInitialdata = async () => {
      const initialData = await useFetchInitialData()
      header.value = await initialData
    }

    fetchInitialdata()
    return {
      header
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  font-family: 'Open Sans';
}
.content {
  padding-top: 4.5rem;
}
</style>
