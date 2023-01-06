<template>
  <Image :title="'PNG'" :urls="pngs"></Image>
  <Image :title="'JPEG/JPG'" :urls="jpegs"></Image>
  <Image :title="'SVG'" :urls="svgs"></Image>
  <Image :title="'GIF'" :urls="gifs"></Image>
  <Image :title="'TIFF'" :urls="tiffs"></Image>
</template>
<script lang="ts" setup>
import Image from "./components/image.vue";
const pngs = ref([
  "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png",
  "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_1280.png",
]);

const jpegs = ref([
  "https://cdn.pixabay.com/photo/2017/05/21/14/19/landscape-2331416_1280.jpg",
  "https://filesamples.com/samples/image/jpeg/sample_1280%C3%97853.jpeg",
]);

const svgs = ref([
  "https://filesamples.com/samples/image/svg/sample_1280%C3%97853.svg",
]);
const gifs = ref([
  "https://filesamples.com/samples/image/gif/sample_640%C3%97426.gif",
]);

const tiffs = ref([
  "https://filesamples.com/samples/image/tiff/sample_640%C3%97426.tiff",
]);
</script>
