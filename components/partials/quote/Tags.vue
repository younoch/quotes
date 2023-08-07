<template>
  <div>
    <aside class="ps-lg-1">
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

      <div class="widget widget-post">
        <div class="widget__header">
          <h5>Recent Quotes</h5>
        </div>
        <ul class="lab-ul widget-wrapper">
          <li
            data-aos="fade-up"
            data-aos-duration="800"
            v-for="item in blogList"
            class="widget-post-item aos-init"
            :key="item"
          >
            <div class="post-thumb">
              <nuxt-link to="/blog/blog-single"
                ><img :src="item.image" alt="product"
              /></nuxt-link>
            </div>
            <div class="post-content">
              <nuxt-link to="/blog/blog-single">
                <h6>{{ item.title }}</h6>
              </nuxt-link>
              <p>{{ item.date }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="widget widget-tags">
        <div class="widget__header">
          <h5>Popular tags</h5>
        </div>
        <ul class="lab-ul widget-wrapper">
          <li v-for="(item, index) in tagList">
            <nuxt-link to="#">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { Category, ITags } from ".";

interface Blog {
  img: string;
  title: string;
  date: string;
}


interface Props {
  blogList?: Blog[];
  tagList?: ITags[];
  pagination?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
  tagList: [],
  blogList: [],
});

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

const recentPosts: Blog[] = [
  {
    img: "/images/blog/p-post/01.jpg",
    title: "Launch Your IDO Project Now",
    date: "02 January 2023",
  },
  {
    img: "/images/blog/p-post/02.jpg",
    title: "Best IDO Launchpad HTML template",
    date: "21 February 2023",
  },
  {
    img: "/images/blog/p-post/03.jpg",
    title: "Who are eligible to launch project?",
    date: "30 Sep 2023",
  },
  {
    img: "/images/blog/p-post/04.jpg",
    title: "What is the Token allocation in The Speakers",
    date: "05 March 2023",
  },
];
</script>
