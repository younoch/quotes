<template>
    <RoadMapTwo class="padding-top" />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import RoadMapTwo from '@/components/common/RoadMapTwo.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { RoadMapTwo, ApplyToLanuch },
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
            projectList: [],
            completedProjectList: [],
            tokenList: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')
            this.projectList = project.data.projectList

            const others = await axios.get('/api/others.json')
            this.tokenList = others.data.tokenList
        },
    }
}
</script>

<style>

</style>