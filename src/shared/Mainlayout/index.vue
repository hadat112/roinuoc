<template>
  <component :is="layout"></component>
</template>

<script setup lang="ts">
import { watch, ref, markRaw } from "vue";
import DefaultLayout from "../../layouts/default/index.vue";

const layout = ref();
layout.value = markRaw(DefaultLayout);
</script>

<style></style>
