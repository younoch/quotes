<template>
    <div class="tier padding-top padding-bottom">
        <div class="container">
            <ReusableHeader subtitle="Choose" title="Tier System" />
            <div class="section__wrapper">
                <div class="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                    <div v-for="(item, index) in tierSystem" :key="index" class="col">
                        <div class="tier__item">
                            <div class="tier__inner">
                                <div class="tier__head">
                                    <h4>TIER {{ index + 1 }}</h4>
                                    <div class="tier__thumb">
                                        <img :src="item.image" alt="Icon">
                                    </div>
                                </div>
                                <div class="tier__body">
                                    <h4>{{ item.title }}</h4>
                                    <ul>
                                        <li>
                                            <p class="tier__title">Staking Requirements</p>
                                            <p class="tier__value">{{ item.stackingRequirement }} BUSD</p>
                                        </li>
                                        <li>
                                            <p class="tier__title">Allocation Type</p>
                                            <p class="tier__value">{{ item.allocation }}</p>
                                        </li>
                                        <li>
                                            <p class="tier__title">Minimam Staking</p>
                                            <p class="tier__value">{{ item.minStacking }} Days</p>
                                        </li>
                                        <li>
                                            <p class="tier__title">Pool Weight</p>
                                            <p class="tier__value">{{ item.poolWeight }}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tier__footer">
                                    <nuxt-link to="/account/login" class="default-btn reverse"><span>Select
                                            Plan</span></nuxt-link>
                                </div>
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
    props: ['tierSystem']
}
</script>

<style>

</style>