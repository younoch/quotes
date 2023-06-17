<template>
    <section class="token padding-top padding-bottom">
        <div class="container">
            <div class="section-header section-header--left">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <p class="section-header__subtitle"> Statistics</p>
                        <h2 class="section__header__title">Tokenomics</h2>
                    </div>
                </div>
            </div>
            <div class="token__wrapper">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <div class="token__info">
                            <ul class="token__info-list">
                                <li v-for="(item, index) in tokenList" :key="index" class="token__info-list-item">
                                    <p class="token__info-list-name">{{ item.title }}</p>
                                    <p class="token__info-list-value">{{ item.value }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="token__allocation  bg--shade1">
                            <div class="token__allocation-inner text-center">
                                <h4 class="mb-4">Sale Proceed Allocation</h4>
                                <div class="token__allocation-thumb">
                                    <img src="/images/token/01.png" alt="Tokenomics Image">
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
    props: ['tokenList']
}
</script>