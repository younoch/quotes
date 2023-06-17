<template>
    <div class="container">
        <ReusableHeader title="Tokenomics" subtitle="Statistics" />
        <div class="token__wrapper">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="token__info aos-init" data-aos="fade-right" data-aos-duration="800">
                        <ul class="token__info-list">
                            <li v-for="(item, index) in tokenList" :key="index" class="token__info-list-item">
                                <p class="token__info-list-name">{{ item.title }}</p>
                                <p class="token__info-list-value">{{ item.value }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="token__allocation  bg--shade1 aos-init" data-aos="fade-left" data-aos-duration="800">
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
</template>

<script>
export default {
    props: ['tokenList']
}
</script>