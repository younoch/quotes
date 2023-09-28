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
import { useLayoutStore } from "~/store/layout";
import LoginForm from "@/components/partials/account/LoginForm.vue";
import NewLetter from "@/components/common/NewLetter.vue";
import { ref } from "vue";

definePageMeta({
  layout: "inner",
});
const activeID = ref(1);
const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: "Login Page", subtitle: "Login" });

useHead({
  link: [
    {
      rel: "apple-touch-icon",
      href: "/images/the-speakers-favicon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
  ],
});

useSeoMeta({
  title: "Login | The Speakers",
  description: "Find inspiring quotes on our website that will motivate you to live your best life. Browse by category, author, or topic and share your favorites with others.",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
});
</script>

<style></style>
