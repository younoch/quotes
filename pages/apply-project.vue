<template>
    <ApplyForm />
    <NewLetter />

</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import ApplyForm from '@/components/partials/apply-project/ApplyForm.vue'
import NewLetter from '@/components/common/NewLetter.vue'

definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { ApplyForm, NewLetter },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Apply For Project', subtitle: "apply project" })
        return {}
    },
    head() {
        return {
            title: "project details",
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style>

</style>

<style>

</style>