<template>
    <Upcomming :projectList="projectList" :isViewMore="true" />
    <Previous :projectList="projectList" :dark="true" />
    <ApplyToLanuch class="padding-top" />
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Upcomming from '@/components/partials/home2/Upcomming.vue'
import Previous from '@/components/partials/project/Previous.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
import { ref, onMounted } from 'vue'

definePageMeta({
    layout: "inner",
    scrollToTop: true
});

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: 'Project Style 2', subtitle: "project 2" })

const projectList = ref([])

const fetchAll = async () => {
    const project = await axios.get('/api/project.json')
    projectList.value = project.data.projectList
}

onMounted(fetchAll)

</script>

<style>

</style>