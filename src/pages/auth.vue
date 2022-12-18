<script setup lang="ts">
import { Input, Button } from "ant-design-vue";
</script>
<template>
  <div class="home w-full bg-bg-body">
    <div class="max-w-[900px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col bg-white">
      <div class="login-page text-center">
        <h3 class="text-dark text-2xl font-weight-light mt-2 mb-0">
          Đăng nhập
        </h3>
        <Input placeholder="Tên đăng nhập" />
        <Input placeholder="Password" />

        <Button size="large" class="w-full btn-login">Đăng nhập</Button>
      </div>
    </div>
  </div>
</template>
