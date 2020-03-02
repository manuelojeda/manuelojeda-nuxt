<template>
  <section id="NavDesktop" class="bg-blue-700 p-4 nav-desktop">
    <section class="grid container mx-auto">
      <div class="social">
        <div class="mr-5">
          <nav-social-media :social="header.social" />
        </div>
      </div>

      <div class="links">
        <div class="float-right">
          <ul>
            <li
              v-for="(item, index) in header.menu"
              :key="index"
              class="link-item"
            >
              <nuxt-link v-if="!item.is_cv" class="rounded" :to="item.URL">
                {{
                  item.Title
                }}
              </nuxt-link>
              <nuxt-link v-else class="rounded" to="#" target="_blank" rel="noopener noreferrer">
                CV
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import NavSocialMedia from './SocialMedia.vue'

export default defineComponent({
  name: 'DesktopNav',
  props: {
    header: {
      type: Object
    }
  },
  components: {
    NavSocialMedia
  }
})
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 30% 1fr;

  .links {
    ul > .link-item {
      float: left;
      margin-left: .25rem;
      margin-right: .25rem;
      a {
        color: white;
        font-weight: 400;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        transition: all ease .2s;

        &:hover {
          background-color: #4299e1;
          font-weight: 500;
        }
      }

      .nuxt-link-exact-active {
        background-color: #4299e1;
        font-weight: 500;
      }
    }
  }
}
</style>
