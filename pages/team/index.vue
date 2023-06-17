<template>
    <div>
        <TeameSection />
        <Investor />
        <NewLetter class="padding-top" />
    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import TeameSection from '@/components/partials/team/TeameSection.vue'
import Investor from '@/components/partials/team/Investor.vue'
import NewLetter from '@/components/common/NewLetter.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { TeameSection, Investor, NewLetter },
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Tokenomics', subtitle: "Tokenomics" })
        return {
            activeID
        }
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
}
</script>

<style>

</style>