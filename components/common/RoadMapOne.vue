<template>
    <section class="roadmap  padding-bottom" id="roadmap">
        <div class="container">
            <ReusableHeader title="Our Roadmap" subtitle="Explore" />
            <div class="roadmap__wrapper2">
                <div class="row gy-4 gy-md-0 gx-5">
                    <template v-for="(item, index) in roadmapTitles" :key="index">
                        <div v-if="index % 2 == 0" class="col-md-6 offset-md-6">
                            <div class=" roadmap__item2 ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
                                <div class="roadmap__item2-inner">
                                    <div class="roadmap__item2-content">
                                        <div class="roadmap__item2-header">
                                            <h4>{{ item.title }}</h4>
                                            <p>{{ item.sl }}</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium!
                                            Dolores maxime numquam animi saepe sapiente tempora, veritatis velit
                                            delectus
                                            debitis provident dolore alias reiciendis cupiditate facere aliquid iusto
                                            inventore!</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div v-if="index % 2 == 1" class="col-md-6">
                            <div class=" roadmap__item2 ms-auto me-md-4 aos-init" data-aos="fade-right"
                                data-aos-duration="800">
                                <div class="roadmap__item2-inner">
                                    <div class="roadmap__item2-content">
                                        <div class="roadmap__item2-header">
                                            <h4>{{ item.title }}</h4>
                                            <p>{{ item.sl }}</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusant ium!
                                            Dolores maxime numquam animi saepe sapiente tempora, veritatis velit
                                            delectus
                                            debitis provident dolore alias reiciendis cupiditate facere aliquid iusto
                                            inventore!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['roadmapTitles']
}
</script>

<style>

</style>