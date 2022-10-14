<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
   async function getPlayList() {
        const response = await fetch('http://localhost:3000/', {
            method: 'GET', 
        });

        const data = await response.json();
        console.log(data);
        return data;  
    }

    const data = ref();  
    onMounted(async () => {
        data.value = await getPlayList();
        console.log(data.value);
    })

watch(() => data.value, () => {
    
    
})
</script>

<template>
    {{data }}
</template>

