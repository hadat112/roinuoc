<script setup lang="ts">
    import { useRoute } from "vue-router";

    const route = useRoute();
    
</script>

<template>
    <div v-if="route.fullPath==='/gioithieu'" class="">
        overview
    </div>
    <router-view ></router-view>
</template>