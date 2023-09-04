<template>
  <div
    class="widget widget-category aos-init"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <div class="widget__header">
      <h5>Quote Categories</h5>
    </div>
    <ul class="lab-ul widget-wrapper list-bg-none row">
      <li
        class="aos-init col-6 col-md-12"
        data-aos="fade-up"
        data-aos-duration="800"
        v-for="(item, index) in categories"
        :key="index"
      >
        <nuxt-link
          :to="`/quote/${item.value}`"
          class="d-flex flex-wrap align-items-center"
        >
          <nuxt-icon name="generals/folder" />
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Category } from ".";

const categories: Category[] = [
  {
    name: "Love",
    value: "love",
    counts: 65,
  },
  {
    name: "Life",
    value: "life",
    counts: 70,
  },
  {
    name: "Birthday",
    value: "birthday",
    counts: 15,
  },
  {
    name: "Motivational",
    value: "motivational",
    counts: 20,
  },
  {
    name: "Funny",
    value: "funny",
    counts: 26,
  },
  {
    name: "Inspirational",
    value: "inspirational",
    counts: 32,
  },
  {
    name: "Family",
    value: "family",
    counts: 15,
  },
  {
    name: "Movie",
    value: "movie",
    counts: 15,
  },
];
</script>
