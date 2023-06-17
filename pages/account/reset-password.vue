<template>
    <div>

        <Head>
            <Title>reset password</Title>
        </Head>
        <ResetPassword />
        <NewLetter />
    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import ResetPassword from '@/components/partials/account/ResetPassword.vue'
import NewLetter from '@/components/common/NewLetter.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { ResetPassword, NewLetter },
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Reset Password', subtitle: "Reset Pass" })
        return {
            activeID
        }
    },
    head() {
        return {
            title: "Reset Password",
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