<template>
  <section class="contact padding-bottom">
    <div class="container">
      <div class="section-header section-header--middle">
        <div class="section-header__content">
          <div class="section-header__titlebar">
            <h2 class="section__header__title">write your blog</h2>
          </div>
        </div>
      </div>
      <div class="contact__wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form @submit.prevent="submitForm" class="form">
              <div class="row">
                <div class="col-12">
                  <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div class="col-12">
                  <ClientOnly>

                    <Editor v-model="message" :options="quillOption" />
                  </ClientOnly>
asd
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="default-btn">
                  <span>Send Your Message</span>
                </button>
              </div>
            </form>
            <pre :key="message">{{ message }}</pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

  import Editor from "@/components/common/Editor.vue";

  const formData: contact = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const quillOption = [
  ['blockquote', 'code-block'],

  ]

  const message = ref("<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>");



</script>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }
}

.content {
  padding: 1rem 0 0;

  h3 {
    margin: 1rem 0 0.5rem;
  }

  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }
}
</style>
