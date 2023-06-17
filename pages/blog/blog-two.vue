<template>

    <Head>
        <Title>Blog</Title>
    </Head>
    <BlogTwo :blogList="blogList" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import BlogTwo from '@/components/partials/blog/BlogTwo.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { BlogTwo, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({
            title: 'Blog With Sidebar', subtitle: "Blog With Sidebar"
        })
        return {}
    },
    head() {
        return {
            title: "Blog",
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