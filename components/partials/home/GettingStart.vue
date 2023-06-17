<template>
    <div>
        <section class="work padding-top padding-bottom" :class="dark ? '' : 'bg--primary-color'">
            <div class="container">
                <ReusableHeader subtitle="Getting Start" title="Simple as 1,2,3" />
                <div class="work__wrapper">
                    <div class="row  justify-content-center g-4">
                        <div v-for="(item, index) in gettingStartList" :key="index" class="col-lg-4 col-sm-6">
                            <div class="work__item">
                                <div class="work__item-inner">
                                    <div class="work__item-thumb">
                                        <img :src="item.icon" alt="work Step 1 Image">
                                    </div>
                                    <div class="work__item-content">
                                        <h4>{{ item.title }}</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa ege.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <nuxt-link to="/kyc" class="default-btn"><span>Varify KYC</span></nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    props: ['gettingStartList', 'dark']
}
</script>