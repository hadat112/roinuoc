<script setup lang="ts">
import { Input } from "ant-design-vue";

const recentPost = [
  "Sân khâu giản dị nhưng đặc sắc của rối cạn tế tiêu",
  "Buồng trò nơi tạo ra linh hồn cho chú rối",
  "Quân rối và quy trình, kỹ thuật chế tác",
  "Các nghiên cứu thống kê về số lượng từ m",
];
const tags = [
  "Sân khâu",
  "Buồng trò",
  "Quân rối",
  "Quân rối",
  "Chế tác",
  "Địa chỉ",
];
</script>
<template>
  <div class="flex flex-col mr-8 gap-8">
    <div class="p-6 bg-white">
      <Input.Search></Input.Search>
    </div>
    <div class="p-6 bg-white">
      <h1 class="text-3xl font-semibold mb-6">Bài viết gần đây</h1>

      <div
        class="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg"
        v-for="post in recentPost"
      >
        <a href="">
          {{ post }}
        </a>
      </div>
    </div>

    <div class="p-6 bg-white">
      <h1 class="text-3xl font-semibold mb-6">Bài viết đọc nhiều</h1>

      <div
        class="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg"
        v-for="post in recentPost"
      >
        <a href="">
          {{ post }}
        </a>
      </div>
    </div>

    <div class="p-6 bg-white">
      <h1 class="text-3xl font-semibold mb-6">Tags</h1>

      <div
        class="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg"
        v-for="tag in tags"
      >
        <a href="">
          {{ tag }}
        </a>
      </div>
    </div>
  </div>
</template>
