<template>
  <layout class="layout" style="min-height: 100vh">
    <layout-sider width="340px" class="channel-list">
      <Sidebar />
    </layout-sider>
    <layout style="flex-direction: column">
      <layout-header
        style="background: #fff; height: fit-content; padding: 0"
      >
        <Header></Header>
      </layout-header>
      <layout-content style="display: flex; background: #fff" id="layout-content">
        <router-view />
      </layout-content>
      <layout-footer>
        <Footer />
      </layout-footer>
    </layout>
  </layout>
</template>

<script setup lang="ts">
import {Layout, LayoutHeader, LayoutContent, LayoutFooter, LayoutSider} from 'ant-design-vue';
import Sidebar from "./components/Sidebar/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
</script>

<style scoped>
  .layout:deep(.ant-layout-sider) {
    background: #fff;
    margin: 1px;
  }

  .layout:deep(.ant-layout-sider) {
    background: #fff;
    margin: 1px;
  }
</style>