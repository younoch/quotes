<template>
    <TierSystem :tierSystem="tierSystem" />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import TierSystem from '@/components/partials/home/TierSystem.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { TierSystem, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Tier System', subtitle: "Tier System" })
        return {}
    },
    head() {
        return {
            title: "Tier System",
        }
    },
    data() {
        return {
            tierSystem: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')

            const others = await axios.get('/api/others.json')
            this.tierSystem = others.data.tierSystem
        },
    }
}
</script>

<style>

</style>