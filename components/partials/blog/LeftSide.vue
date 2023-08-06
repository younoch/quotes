<template>
  <aside>
    <div class="widget widget-category mt-2 mt-4">
      <div class="widget__header">
        <h5>Post Categories</h5>
      </div>
      <ul class="lab-ul widget-wrapper list-bg-none">
        <li v-for="(item, index) in categories" :key="index">
          <a href="#" class="d-flex flex-wrap justify-content-between">
            <client-only>
              <span>
                <i class="fa-solid fa-folder"></i>
                <span class="ml-3">{{ item.name }}</span>
              </span>
            </client-only>
            <span>{{ item.counts }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="widget widget-post">
      <div class="widget__header">
        <h5>Recent Post</h5>
      </div>
      <ul class="lab-ul widget-wrapper">
        <li
          v-for="(item, index) in blogList"
          class="widget-post-item"
          :key="index"
        >
          <div class="post-thumb">
            <nuxt-link to="/blog/blog-single"
              ><img :src="item.img" alt="product"
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
      <ul v-if="tagList && tagList.length" class="lab-ul widget-wrapper">
        <li>
          <a v-for="(tag, index) in tagList" :key="index" href="#">{{
            tag.name
          }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ITags } from "../quote";

interface Props {
  tagList?: ITags[];
}

const props = withDefaults(defineProps<Props>(), {
  tagList: [],
});
interface Blog {
  img: string;
  title: string;
  date: string;
}

interface Category {
  name: string;
  counts: number;
}

const blogList: any[] = [];

const categories: Category[] = [
  {
    name: "Show all",
    counts: 15,
  },
  {
    name: "IGO",
    counts: 20,
  },
  {
    name: "Metaverse",
    counts: 65,
  },
  {
    name: "Web 3.0",
    counts: 32,
  },
  {
    name: "IDO",
    counts: 16,
  },
  {
    name: "Token",
    counts: 70,
  },
  {
    name: "Binance",
    counts: 26,
  },
  {
    name: "IGO",
    counts: 20,
  },
];

</script>
