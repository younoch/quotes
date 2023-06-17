<template>
    <div class="blog__item">
        <div class="blog__inner">
            <div class="blog__thumb">
                <img :src="image" alt="Blog Images">
            </div>
            <div class="blog__content">
                <div class="blog__content-top">
                    <h4><nuxt-link to="/blog/blog-single">{{ title }}</nuxt-link>
                    </h4>
                    <ul class="blog__meta d-flex flex-wrap align-items-center">
                        <li class="blog__meta-author">
                            <a href="#"><span><i class="fa-solid fa-user"></i></span> {{ author }}</a>
                        </li>
                        <li class="blog__meta-date">
                            <a href="#"><span><i class="fa-solid fa-calendar-days"></i></span>
                                30
                                December 2023</a>
                        </li>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisici ng elit. Harum, eum? Lorem
                    ipsum
                    dolor sit amet.</p>
                <div class="blog__content-bottom">
                    <nuxt-link to="/blog/blog-single" class="text-btn">Read More</nuxt-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'author', 'image']
}
</script>