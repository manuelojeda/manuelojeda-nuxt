<template>
  <div id="homepage" class="z-0">
    <div class="information px-3">
      <h1 class="title font-sans">
        {{
          welcomeData.Title
        }}
        <br>
        <small class="text-teal-500">
          {{
            welcomeData.subtitle
          }}
        </small>
      </h1>

      <p class="description text-gray-700 mb-6">
        {{
          welcomeData.description
        }}
      </p>

      <a
        :href="`mailto:${welcomeData.Email}`"
        class="contact bg-blue-600 hover:bg-blue-700 rounded py-3 px-6 text-white"
      >
        Contact me
      </a>
    </div>
    <div class="profile-pic">
      <img
        class="rounded-full mx-auto"
        :src="`${BASE_URL}/${welcomeData.Profile_Pic.url}`"
      >
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Index',
  head: {
    title: 'Manuel Ojeda - Home'
  },
  async asyncData (context: any) {
    const response = await context.$axios({
      url: `${context.env.apiBaseUrl}/homepages`
    })

    return {
      BASE_URL: context.env.apiBaseUrl,
      welcomeData: await response.data[0]
    }
  }
})
</script>

<style lang="scss" scoped>
#homepage {
  display: grid;
  grid-template-columns: 1fr;
  align-self: center;
  align-content: center;
  height: 100%;
  grid-gap: 1rem;
  font-family: 'Roboto', sans-serif;

  .information {
    order: 2;
    text-align: center;
    .title {
      font-size: 3.25rem;
      line-height: 3rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
    }

    .contact {
      transition: all ease .2s;
    }
  }
  .profile-pic {
    order: 1;

    img {
      max-width: 310px;
    }
  }

  @media(min-width: 768px) {
    .profile-pic {
      img {
        max-width: 350px;
      }
    }
  }

  @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .information {
      order: 1;
      text-align: left;
      align-self: center;
    }

    .profile-pic {
      order: 2;
      img {
        max-width: 400px;
      }
    }
  }
}
</style>
