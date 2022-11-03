<script setup lang="ts">
import { Button as DButton, Divider } from "ant-design-vue";

interface IProps {
  data: {
    title: string;
    content: string;
    slug: string;
  };
}

const props = defineProps<IProps>();
</script>

<template>
  <div
    class="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center"
  >
    <h1 class="text-3xl font-bold text-center leading-10 mb-4">
      {{ props.data.title }}
    </h1>
    <span class="">06/10/2022 - Rối nước tế tiêu - 0 Bình luận</span>
    <div class="w-[60px]">
      <Divider style="height: 2px; background-color: #7cb305" />
    </div>
    <p class="text-lg leading-10 text-justify mb-8 max-h-[300px] overflow-hidden">
      {{ props.data.content}}
    </p>
    <DButton>
        <router-link :to="props.data.slug">
            Đọc thêm 
        </router-link>
    </DButton>
  </div>
</template>
