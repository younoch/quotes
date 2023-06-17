<template>
    <section class="benifit padding-top" :class="dark ? '' : 'bg--primary-color'">
        <div class="container">
            <ReusableHeader subtitle="Benifits" title="What We Offer" />
            <div class="benifit__wrapper">
                <div class="row g-5">
                    <div v-for="(item, index) in workList" :key="index" class="col-lg-3 col-sm-6">
                        <div class="benifit__item">
                            <div class="benifit__item-inner">
                                <div class="benifit__item-thumb">
                                    <img :src="item.img" alt="Benifit image">
                                </div>
                                <div class="benifit__item-content">
                                    <h4>{{ item.title }}</h4>
                                    <p>{{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['workList', 'dark']
}
</script>

<style>

</style>