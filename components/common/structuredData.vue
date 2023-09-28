<template>
    <script type="application/ld+json" v-html="JSON.stringify(data)"></script>
  </template>
  
<script setup lang="ts">
interface Props {
    '@type': string;
    
    name: string;
    description: string;
    url: string;
    image: string;
    keywords: string;
}
defineProps<Props>();
</script>
  