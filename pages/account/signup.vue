<template>
    <div>

        <Head>
            <Title>Signup</Title>
        </Head>
        <SignupForm />
        <NewLetter />
    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import SignupForm from '@/components/partials/account/SignupForm.vue'
import NewLetter from '@/components/common/NewLetter.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { SignupForm, NewLetter },
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Sign Up Page', subtitle: "Sign up" })
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