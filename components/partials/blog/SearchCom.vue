<template>
    <div class="col-lg-4">
        <aside class="ps-lg-4">
            <div class="widget widget-search">
                <div class="widget__header">
                    <h5>Search keywords</h5>
                </div>
                <div class="widget-search-inner">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search here" aria-label="Search bar" />
                        <button class="search-icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="widget widget-category">
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
                    <li v-for="item in blogList" class="widget-post-item" :key="item">
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
                    <li><a href="#">metaverse</a></li>
                    <li><a href="#" class="active">IDO</a></li>
                    <li><a href="#">token</a></li>
                    <li><a href="#">torkgo</a></li>
                    <li><a href="#">html</a></li>
                    <li><a href="#">cryptos</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">polygon</a></li>
                    <li><a href="#">solana</a></li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>

export default {
    props: ["blogList"],
    setup() {
        const categories = [
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

        const recentPosts = [
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

        // expose to template and other options API hooks
        return {
            categories,
            recentPosts,
        };
    },
};
</script>
