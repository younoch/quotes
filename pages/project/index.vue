<template>

    <Head>
        <Title>Project</Title>
    </Head>
    <UpcomingIDO :projectList="projectList" allButtonTitle="View Rank" redirectUrl="/leaderboard" />
    <Counter />
    <CompletedProject class="padding-top" :completedProjectList="completedProjectList" :pagination="true" />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import UpcomingIDO from '@/components/common/UpcomingIDO.vue'
import Counter from '@/components/common/Counter.vue'
import CompletedProject from '@/components/partials/home/CompletedProject.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { UpcomingIDO, Counter, CompletedProject, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Project', subtitle: "project" })
        return {}
    },
    head() {
        return {
            title: "project",
        }
    },
    data() {
        return {
            projectList: [],
            completedProjectList: [],
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')
            this.projectList = project.data.projectList
            this.completedProjectList = project.data.completedProject

            const others = await axios.get('/api/others.json')
        },
    }
}
</script>

<style>

</style>