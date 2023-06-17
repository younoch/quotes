<template>

    <Head>
        <Title>Blog</Title>
    </Head>
    <Blog :blogList="blogList" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Blog from '@/components/partials/blog/Blog.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Blog, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({
            title: 'Latest Blogs', subtitle: "Blog"
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