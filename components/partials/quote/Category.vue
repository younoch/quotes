<template>
      <div
        class="widget widget-category aos-init"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div class="widget__header">
          <h5>Quote Categories</h5>
        </div>
        <ul class="lab-ul widget-wrapper list-bg-none">
          <li
            class="aos-init"
            data-aos="fade-up"
            data-aos-duration="800"
            v-for="(item, index) in categories"
            :key="index"
          >
            <nuxt-link :to="`/quote/${item.value}`" class="d-flex flex-wrap justify-content-between">
              <client-only>
                <span>
                  <i class="fa-solid fa-folder"></i>
                  <span class="ml-3">{{ item.name }}</span>
                </span>
              </client-only>
              <!-- <span>{{ item.counts }}</span> -->
            </nuxt-link>
          </li>
        </ul>
      </div>
</template>

<script setup lang="ts">
import { Category } from ".";

const categories: Category[] = [
  {
    name: "Popular",
    value: 'popular',
    counts: 15,
  },
  {
    name: "Inspirational",
    value: 'inspirational',
    counts: 20,
  },
  {
    name: "Humor",
    value: 'humor',
    counts: 65,
  },
  {
    name: "Success",
    value: 'success',
    counts: 32,
  },
  {
    name: "Philosophy",
    value: "philosophy",
    counts: 16,
  },
  {
    name: "Happiness",
    value: 'happiness',
    counts: 70,
  },
  {
    name: "Love",
    value: 'love',
    counts: 26,
  },
  {
    name: "Motivational",
    value: 'motivational',
    counts: 20,
  },
];
</script>
