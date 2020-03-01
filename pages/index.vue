<template>
  <div>
    NUXT + TS + Comp API
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Index',
  async asyncData (context: any) {
    const response = await context.$axios({
      url: `${context.env.apiBaseUrl}/homepages`
    })

    return {
      BASE_URL: context.env.apiBaseUrl,
      welcomeData: await response.data
    }
  }
})
</script>

<style scoped></style>
