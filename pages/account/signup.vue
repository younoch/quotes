<template>
  <div>
    <Head>
      <Title>Signup</Title>
    </Head>
    <ReusableHeader  subtitle="Signup" title="signup" />
    <SignupForm />
    <NewLetter />
  </div>
</template>

<script>
import SignupForm from "@/components/partials/account/SignupForm.vue";
import NewLetter from "@/components/common/NewLetter.vue";
// definePageMeta({
//   layout: "inner",
// });
export default {
  scrollToTop: true,
  components: { SignupForm, NewLetter },
  setup() {
    const activeID = 1;
    return {
      activeID,
    };
  },
  head() {
    return {
      title: "Tokenomics",
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
