<template>
      <div class="blog__item">
        <div class="blog__inner">
            <div class="blog__thumb">
                <nuxt-img src="/images/blog/01.jpg" alt="Blog Images" />
            </div>
            <div class="blog__content  m-2">
                <div class="blog__content-top">
                    <h4><nuxt-link to="/blog/blog-single">Socket.IO with NUXT 3, express and MongoDB</nuxt-link>
                    </h4>
                </div>
                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisici ng elit. Harum, eum? Lorem
                    ipsum
                    dolor sit amet.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
  isPushRouter?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isPushRouter: false,
});
</script>
