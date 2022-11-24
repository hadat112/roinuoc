<script setup lang="ts">
import { useRoute } from "vue-router";
import { Dropdown, Menu, MenuItem } from "ant-design-vue";
const navItems = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Giới thiệu",
    path: "/overview",
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
    class="header w-full h-16 flex justify-center items-center gap-4 text-base text-white font-bold"
  >
    <div
      v-for="(item, index) in navItems"
      :key="index"
      class="nav-item px-3 h-full flex items-center"
      :class="{ actived: item.path === route.path }"
    >
      <Dropdown>
        <router-link :to="item.path" class="h-full flex items-center hover:text-white">
          <span
            class="inline-block min-w-[42px] break-normal leading-5 sm:hidden md:hidden lg:inline-block"
          >
            {{ item.name }}
          </span>
        </router-link>
        <!-- <template v-if="item.children" #overlay>
          <Menu>
            <menu-item v-for="subnav in item.children">
              <router-link :to="item.path + subnav.path" class="hover:text-white">
                <span
                  class="inline-block min-w-[42px] break-normal leading-5 sm:hidden md:hidden lg:inline-block"
                >
                  {{ subnav.name }}
                </span>
              </router-link>
            </menu-item>
          </Menu>
        </template> -->
      </Dropdown>
    </div>
  </div>
</template>

<style scoped>
  .nav-item:deep(ul.ant-dropdown-menu.ant-dropdown-menu-root.ant-dropdown-menu-vertical.ant-dropdown-menu-light) {
    border-radius: 4px;
    padding: 4px;
  }

  .actived {
    border-top: 3px solid white;
  }
</style>
