<template>
    <div>

        <Head>
            <Title>Login</Title>
        </Head>
        <LoginForm />
        <NewLetter />
    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import LoginForm from '@/components/partials/account/LoginForm.vue'
import NewLetter from '@/components/common/NewLetter.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { LoginForm, NewLetter },
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Login Page', subtitle: "Login" })
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