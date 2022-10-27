<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Input as DInput } from 'ant-design-vue';

const playName = ref('');

async function getPlayList() {
  const response = await fetch("http://localhost:3000/", {
    method: "GET",
  });

  const data = await response.json();
  console.log(data);
  return data;
}

async function createPlay() {
  const dataForm = { name: playName.value }
  console.log(dataForm);
  
  const response = await fetch("http://localhost:3000/play", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataForm),
  });

  console.log(response);
}

const data = ref();
onMounted(async () => {
  data.value = await getPlayList();
});

const handleSubmit = () => {
    createPlay();
    console.log('submit');
    
};

watch(()=> playName.value, () => {
    console.log(playName.value);
})
</script>

<template>
    <div class="flex flex-col">

        {{ data }}
        <form class="w-full" @submit.prevent="handleSubmit" action="">
            <label for=""> name </label>
            <input v-model="playName" type="text" />
            <Button type="submit">submit</Button>
        </form>
    </div>
</template>
