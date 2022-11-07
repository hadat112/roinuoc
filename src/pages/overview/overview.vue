<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Input as DInput, Button as DButton } from "ant-design-vue";
import ShortPost from "@/components/ShortPost.vue";
import CreatePost from "./components/CreatePost.vue";

const posts = ref();
const showModal = ref(false);

async function createPost(title: string, content: string) {
  const dataForm = { title: title, content: content, slug: title };
  console.log(dataForm);

  const response = await fetch("http://localhost:3000/overview/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataForm),
  });

  console.log(response);
}

const handleSubmit = (title: string, content:any) => {
  createPost(title, content.ops[0].insert);
};

async function getPostList() {
  const response = await fetch("http://localhost:3000/overview", {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

onMounted(async () => {
  posts.value = await getPostList();
});
</script>

<template>
  <div class="flex flex-col w-full p-4">
    <div class="max-w-[900px] w-full flex gap-4 mx-auto">
      <DInput />
      <DButton class="text-2xl leading-5" @click="showModal = true">+</DButton>
    </div>
    <div class="w-full flex-1" v-for="post in posts">
      <ShortPost :data="post" />
    </div>
  </div>

  <CreatePost
    :visible="showModal"
    @cancel="showModal = false"
    @ok="handleSubmit"
  />
</template>
