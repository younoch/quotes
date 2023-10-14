<template>
  <div>
    <Head>
      <Title>Terms and Conditions</Title>
    </Head>
    <ReusableHeader  subtitle="Terms and Conditions" title="Terms and Conditions for The Speakers" />
    <TermsAndConditions />
    <NewLetter />
  </div>
</template>

<script>
import TermsAndConditions from "@/components/partials/account/TermsAndConditions.vue";
import NewLetter from "@/components/common/NewLetter.vue";

export default {
  scrollToTop: true,
  components: { TermsAndConditions, NewLetter },
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
