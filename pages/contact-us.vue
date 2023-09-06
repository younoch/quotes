<template>
  <section class="contact padding-bottom">
    <div class="container">
      <div class="section-header section-header--middle">
        <div class="section-header__content">
          <div class="section-header__titlebar">
            <h2 class="section__header__title">Get In Touch</h2>
          </div>
        </div>
      </div>
      <div class="contact__wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form @submit.prevent="submitForm" class="form">
              <div class="row">
                <div class="col-md-6">
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div class="col-12">
                  <textarea
                    v-model="formData.message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="default-btn">
                  <span>Send Your Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ApplyToLanuch class="padding-top" />
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/store/layout";
import ApplyToLanuch from "@/components/common/ApplyToLanuch.vue";

definePageMeta({
  middleware: [function (to, from) {}, "auth"],
});

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: "Stacking", subtitle: "stacking" });

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

const { post } = useApi();
const formData: contact = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function submitForm() {
  post("/create-contact-message", formData)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}
</script>

<style></style>
