<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Input as DInput } from 'ant-design-vue';
import ShortPost from '@/components/ShortPost.vue';

async function getPostList() {
  const response = await fetch("http://localhost:3000/overview", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
  return data;
}

const posts = ref();
onMounted(async () => {
  posts.value = await getPostList();
});
</script>

<template>
    <div class="flex flex-col w-full">
        <div class="w-full flex-1" v-for="post in posts">
            <ShortPost :data=post />
        </div>
    </div>
</template>
