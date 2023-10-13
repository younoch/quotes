<template>
  <div>
    <Head>
      <Title>reset password</Title>
    </Head>
    <ReusableHeader  subtitle="Reset Password" title="Reset Password" />
    <ResetPassword />
    <NewLetter />
  </div>
</template>

<script>
import ResetPassword from "@/components/partials/account/ResetPassword.vue";
import NewLetter from "@/components/common/NewLetter.vue";

export default {
  scrollToTop: true,
  components: { ResetPassword, NewLetter },
  setup() {
    const activeID = 1;
    return {
      activeID,
    };
  },
  head() {
    return {
      title: "Reset Password",
    };
  },
  data() {
    return {
      projectList: [],
      completedProjectList: [],
      tokenList: [],
    };
  },
};
</script>

<style></style>
