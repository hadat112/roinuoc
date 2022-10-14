<script setup lang="ts">
import { useRoute } from "vue-router";
const navItems = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Giới thiệu",
    path: "/gioithieu",
  },
  {
    name: "Sự kiện",
    path: "/sukien",
  },
  {
    name: "Vở diễn",
    path: "/vodien",
  },
  {
    name: "Lịch chiếu",
    path: "/lichchieu",
  },
];

const route = useRoute();
</script>

<template>
  <div
    class="w-full h-16 flex justify-center items-center gap-4 text-base text-white font-bold"
  >
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.path"
        class="nav-item px-3 py-2 h-full flex items-center hover:text-white"
        :class="{ actived: item.path === route.path }"
      >
        <span
          class="inline-block min-w-[42px] break-normal leading-5 sm:hidden md:hidden lg:inline-block"
        >
          {{ item.name }}
        </span>
      </router-link>
  </div>
</template>

<style scoped>

</style>
