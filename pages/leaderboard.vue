<template>
    <Leaderboad />
    <ApplyToLanuch />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import Leaderboad from '@/components/partials/others/Leaderboad.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { Leaderboad, ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({
            title: 'Leader Board', subtitle: "Leaderboard"
        })
        return {}
    },
    head() {
        return {
            title: "Leaderboard",
        }
    },
    data() {
        return {
        }
    },
}
</script>