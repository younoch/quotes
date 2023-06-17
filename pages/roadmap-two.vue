<template>
    <RoadMapOne class="padding-top" :roadmapTitles="roadmapTitles" />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import RoadMapOne from '@/components/common/RoadMapOne.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { RoadMapOne, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({
            title: 'Our Roadmap', subtitle: "Roadmap"
        })
        return {}
    },
    head() {
        return {
            title: "Tokenomics",
        }
    },
    data() {
        return {
            completedProjectList: [],
            tokenList: [],
            roadmapTitles: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {

            const others = await axios.get('/api/others.json')
            this.tokenList = others.data.tokenList
            this.roadmapTitles = others.data.roadmapTitles
        },
    }
}
</script>

<style>

</style>