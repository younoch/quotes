<template>
  <div>
    <Head>
      <Title>Login</Title>
    </Head>
    <LoginForm />
    <NewLetter />
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/stores/layout";
import LoginForm from "@/components/partials/account/LoginForm.vue";
import NewLetter from "@/components/common/NewLetter.vue";
import { ref } from "vue";

definePageMeta({
  layout: "inner",
});
const activeID = ref(1);
const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: "Login Page", subtitle: "Login" });

useSeoMeta({
  title: "Login | The Speakers",
  description: "Wisdom from the World’s Greatest Minds",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
});
</script>

<style></style>
