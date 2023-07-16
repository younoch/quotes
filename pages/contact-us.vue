<template>
    <section class="contact padding-bottom">
        <div class="container">
            <div class="section-header section-header--middle">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <h2 class="section__header__title"> Get In Touch
                        </h2>
                    </div>
                </div>
            </div>
            <div class="contact__wrapper">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <form @submit.prevent="submitForm" action="#" class="form">
                            <div class="row">
                                <div class="col-md-6">
                                    <input v-model="formData.name" type="text" placeholder="Your Name" required>
                                </div>
                                <div class="col-md-6">
                                    <input v-model="formData.email" type="email" placeholder="Your Email" required>
                                </div>
                                <div class="col-12">
                                    <input v-model="formData.subject" type="text" placeholder="Subject *" required>
                                </div>
                                <div class="col-12">
                                    <textarea v-model="formData.message" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="default-btn"><span>Send Your Message</span></button>
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
import { useLayoutStore } from "~/stores/layout";
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: 'Stacking', subtitle: "stacking" })

const { post } = useApi();
const formData : contact = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const head = () => {
  return {
    title: "contact us",
  }
}

function submitForm() {
    post("/create-contact-message", formData)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });
}
</script>


<style>

</style>