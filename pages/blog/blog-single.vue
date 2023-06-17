<template>
    <Signle :blogList="blogList.slice(0, 3)" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Signle from '@/components/partials/blog/Signle.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Signle },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({
            title: 'Blog Details', subtitle: "Blog Single"
        })
        return {}
    },
    head() {
        return {
            title: "Blog Details",
        }
    },
    data() {
        return {
            blogList: [],
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const blog = await axios.get('/api/blog.json')
            this.blogList = blog.data.blogList
        },
    }
}
</script>

<style>

</style>