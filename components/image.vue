<template>
  <h1>{{ title }}</h1>
  <hr />
  <nuxt-img
    v-for="url of urls"
    :key="url"
    :src="url"
    :alt="title"
    sizes="xs:320px sm:640px md:768px lg:1024px"
    quality="80"
    format="avif"
  />
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  urls: {
    type: Array<string>,
    required: true,
  },
});
</script>
<style>
h1 {
  margin-top: 20px;
}
</style>
