<template>
  <ul v-if="pagination" class="pagination justify-content-center">
    <li class="page-item disabled">
      <span class="page-link"><i class="fa-solid fa-angle-left"></i></span>
    </li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i></a>
    </li>
  </ul>
  <div
    v-else
    class="text-center aos-init"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <nuxt-link to="/" class="default-btn"><span>View More</span></nuxt-link>
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
