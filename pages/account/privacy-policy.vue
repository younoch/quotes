<template>
  <div>
    <Head>
      <Title>Privacy Policy</Title>
    </Head>
    <ReusableHeader  subtitle="Privacy Policy" title="Privacy Policy for The Speakers" />
    <PrivacyPolicy />
    <NewLetter />
  </div>
</template>

<script>
import PrivacyPolicy from "@/components/partials/account/PrivacyPolicy.vue";
import NewLetter from "@/components/common/NewLetter.vue";

export default {
  scrollToTop: true,
  components: { PrivacyPolicy, NewLetter },
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
