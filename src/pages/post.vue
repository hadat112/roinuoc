<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { Button as DButton, Divider } from "ant-design-vue";

const slug = useRoute().fullPath;
const url = `http://localhost:3000${slug}`;

async function getPost() {
  const response = await fetch(url, {
    method: "GET",
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}

const post = ref();
onMounted(async () => {
  post.value = await getPost();
});
</script>

<template>
     <div
    class="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center"
  >
    <h1 class="text-3xl font-bold text-center leading-10 mb-4">
      {{ post?.title }}
    </h1>
    <span class="">06/10/2022 - Rối nước tế tiêu - 0 Bình luận</span>
    <div class="w-[60px]">
      <Divider style="height: 2px; background-color: #7cb305" />
    </div>
    <p class="text-lg leading-10 text-justify mb-8">
      {{ post?.content}}
    </p>
  </div>
</template>
