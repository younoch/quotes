<template>
  <div>
    <Head>
      <Title>Privacy Policy</Title>
    </Head>
    <ReusableHeader  subtitle="Privacy Policy" title="Privacy Policy for The Speakers" />
    <ProvacyPolicy />
    <NewLetter />
  </div>
</template>

<script>
import ProvacyPolicy from "@/components/partials/account/ProvacyPolicy.vue";
import NewLetter from "@/components/common/NewLetter.vue";

export default {
  scrollToTop: true,
  components: { ProvacyPolicy, NewLetter },
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
