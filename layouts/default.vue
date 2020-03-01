<template>
  <div>
    Mi layout bien mamalon :3
    <navi-bar
      :menu="menu"
      :social="social"
    />
    <nuxt />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, onServerPrefetch, ref } from '@vue/composition-api'
import NaviBar from '~/components/Nav/Index.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    NaviBar
  },
  setup (props, context) {
    const menu: any = ref({})
    const social: any = ref({})

    onServerPrefetch(async () => {
      const responseMenu = await context.root.$axios({
        url: 'http://localhost:1337/menus'
      })

      const responseSocial = await context.root.$axios({
        url: 'http://localhost:1337/social-medias'
      })

      menu.value = await responseMenu.data
      social.value = await responseSocial.data
    })

    const fetchInitialdata = async () => {
      const responseMenu = await context.root.$axios({
        url: 'http://localhost:1337/menus'
      })
      const responseSocial = await context.root.$axios({
        url: 'http://localhost:1337/social-medias'
      })

      menu.value = await responseMenu.data
      social.value = await responseSocial.data
    }

    fetchInitialdata()
    return {
      menu,
      social
    }
  }
})
</script>

<style scoped>

</style>
