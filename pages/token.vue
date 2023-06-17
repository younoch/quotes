<template>
    <section class="token padding-top padding-bottom">
        <Tokenimics class="padding-top" :tokenList="tokenList" />
    </section>
    <ApplyToLanuch class="padding-top" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Tokenimics from '@/components/partials/token/Tokenimics.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Tokenimics, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Tokenomics', subtitle: "Tokenomics" })
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