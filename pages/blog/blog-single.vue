<template>
    <Signle :blogList="blogList.slice(0, 3)" />
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Signle from '@/components/partials/blog/Signle.vue'
definePageMeta({
    layout: "inner",
});
const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({
    title: 'Blog Details', subtitle: "Blog Single"
})
const blogList = ref([]);
const fetchAll = async () => {
    const blog = await axios.get('/api/blog.json')
    blogList.value = blog.data.blogList
}
onMounted(fetchAll);
</script>


<style>

</style>