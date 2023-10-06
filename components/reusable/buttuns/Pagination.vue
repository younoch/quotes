<template>
  <ul v-if="pagination" class="pagination justify-content-center">
    <li class="page-item disabled">
      <span class="page-link">
        <nuxt-icon name="generals/angle-left"/>
      </span>
    </li>
    <li class="page-item active" aria-current="page">
      <nuxt-link class="page-link" to="/account/login">1</nuxt-link>
    </li>
    <li class="page-item">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><nuxt-link class="page-link" to="/account/login">3</nuxt-link></li>
    <li class="page-item">
      <a class="page-link" href="/account/login">
        <nuxt-icon name="generals/angle-right"/>
      </a>
    </li>
  </ul>
  <div
    v-else
    class="text-center aos-init"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <!-- <nuxt-link to="/" class="default-btn"><span>View More</span></nuxt-link> -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  pagination?: boolean;
  paginationData: any
}
const props = withDefaults(defineProps<Props>(), {
  pagination: false,
});
</script>
