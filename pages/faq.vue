<template>
    <CommonQueiry class="padding-top" />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import CommonQueiry from '@/components/partials/home2/CommonQueiry.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { CommonQueiry, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Frequently Asked Questions', subtitle: "faq" })
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

<style></style>