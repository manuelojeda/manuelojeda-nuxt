<template>
  <section id="navMobile" class="block bg-blue-700 p-4 nav-mobile">
    <div class="float-left">
      <div class="ml-5">
        <nav-social-media :social="header.social" />
      </div>
    </div>
    <div class="block w-full h-full">
      <button
        class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-5 float-right"
        @click="handleMenu"
      >
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
    <menu v-show="visibility" class="menu my-4 bg-blue-800 -mx-4">
      <ul class="text-white font-semimedium z-50">
        <li v-for="(menu, index) in header.menu" :key="index" @click="handleMenu">
          <nuxt-link v-if="!menu.is_cv" class="w-full block py-2 px-5 hover:bg-blue-500 menu-link" :to="menu.URL">
            {{
              menu.Title
            }}
          </nuxt-link>
          <nuxt-link v-else class="w-full block py-2 px-5 hover:bg-blue-500 menu-link" to="#" target="_blank" rel="noopener noreferrer">
            CV
          </nuxt-link>
        </li>
      </ul>
    </menu>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import NavSocialMedia from './SocialMedia.vue'

export default defineComponent({
  name: 'MobileNav',
  components: {
    NavSocialMedia
  },
  props: {
    header: {
      type: Object
    }
  },
  setup () {
    const visibility = ref<boolean>(false)

    function handleMenu () {
      visibility.value = !visibility.value
    }

    function listener () {
      if (process.client) {
        window.addEventListener('click', function (e: any) {
          if (!document.getElementById('navMobile').contains(e.target)) {
            visibility.value = false
          }
        })
      }
    }

    listener()
    return {
      visibility,
      handleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-mobile {
  height: 4.5rem;

  menu {
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 0;

    ul > li > .menu-link {
      transition: all ease .2s;
    }
    .nuxt-link-exact-active {
      background-color: #4299e1;
      font-weight: 500;
    }
  }
}
</style>
