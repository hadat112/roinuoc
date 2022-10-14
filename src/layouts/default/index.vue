<script setup lang="ts">
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from "ant-design-vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const changeHeader = ref(false);
const handleScroll = (scrollY: number) => {
  if (scrollY > 64) {
    changeHeader.value = true;
  } else {
    changeHeader.value = false;
  }
};

onMounted(() => {
  window.addEventListener(
    "scroll",
    () => {
      handleScroll(window.scrollY);
    },
    true
  );
});
</script>

<template>
  <layout
    class="layout"
    style="min-height: 100vh"
    @scroll.native="handleScroll"
  >
    <layout style="flex-direction: column">
      <layout-header
        :class="{
          '!bg-bg-header !relative': route.path !== '/',
          '!bg-bg-header fixed': changeHeader,
          'fixed !bg-transparent': !changeHeader && route.path === '/',
        }"
        style="height: fit-content; padding: 0"
      >
        <Header></Header>
      </layout-header>
      <layout-content style="display: flex; background: #fff">
        <router-view />
      </layout-content>
      <layout-footer>
        <Footer />
      </layout-footer>
    </layout>
  </layout>
</template>

<style scoped>
.layout:deep(.ant-layout-header) {
  background: transparent;
  color: black;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
