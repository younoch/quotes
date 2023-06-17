<template>
    <FarmingList />
    <ApplyToLanuch />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import FarmingList from '@/components/partials/farming/FarmingList.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'

definePageMeta({
    layout: "inner",
});

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: 'Farming', subtitle: "Farming" })

const projectList = ref([])
const tokenList = ref([])

async function fetchAll() {
  const project = await axios.get('/api/project.json')
  projectList.value = project.data.projectList

  const others = await axios.get('/api/others.json')
  tokenList.value = others.data.tokenList
}

onMounted(fetchAll)

</script>

<style>

</style>