<template>
    <div >
        <aside class="ps-lg-4">
            <div class="widget widget-category aos-init" data-aos="fade-up"
                            data-aos-duration="800">
                <div class="widget__header">
                    <h5>Post Categories</h5>
                </div>
                <ul class="lab-ul widget-wrapper list-bg-none">
                    <li class="aos-init" data-aos="fade-up" data-aos-duration="800" v-for="(item, index) in categories" :key="index">
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
                    <li data-aos="fade-up" data-aos-duration="800"  v-for="item in blogList" class="widget-post-item aos-init" :key="item">
                        <div class="post-thumb">
                            <nuxt-link to="/blog/blog-single"><img :src="item.image" alt="product" /></nuxt-link>
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
                    <li v-for="(item, index) in tagList"><a href="#">{{item._id}}</a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">

interface Blog {
  img: string;
  title: string;
  date: string;
}

interface Category {
  name: string;
  counts: number;
}

interface Props {
  blogList: Blog[]
  tagList?: any[]
  pagination: boolean
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
});


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
    title: "What is the Token allocation in Torkgo",
    date: "05 March 2023",
  },
];
</script>