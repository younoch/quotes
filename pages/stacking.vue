<template>

    <Head>
        <Title>Stacking</Title>
    </Head>
    <Stack />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import Stack from '@/components/partials/stacking/Stack.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Stack, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Stacking', subtitle: "stacking" })
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
            tokenList: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {

            const others = await axios.get('/api/others.json')
            this.tokenList = others.data.tokenList
        },
    }
}
</script>

<style>

</style>