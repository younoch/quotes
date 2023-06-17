<template>
    <div class="farming padding-top padding-bottom">
        <div class="container">
            <div class="farming__wrapper">
                <div class="row g-5">
                    <div v-for="(item, index) in farmingList" :key="index" class="col-12">
                        <div class="farming__item">

                            <div @click="showContent(index)" class="farming__item-header">
                                <div class="farming__thumb">
                                    <img :src="item.image" alt="Project img">
                                </div>
                                <div class="farming__content">
                                    <div class="farming__content-title">
                                        <h4>{{ item.title }}</h4>
                                        <p>{{ item.author }}</p>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum non illum,
                                        labore
                                        architecto delectus. Lorem ipsum dolor sit amet consectetur, adipisicing</p>

                                    <ul class="farming__list">
                                        <li class="farming__list-item">
                                            <h5>0 LP</h5>
                                            <p>Stacked</p>
                                        </li>
                                        <li class="farming__list-item">
                                            <h5>0.00 TYPAD</h5>
                                            <p>Earned</p>
                                        </li>
                                        <li class="farming__list-item">
                                            <client-only>
                                                <h3 class="color--theme-color">
                                                    <span class="purecounter" data-purecounter-start="0"
                                                        :data-purecounter-end="item.apy">{{ item.apy }}
                                                    </span>%
                                                </h3>
                                            </client-only>
                                            <p>APY</p>
                                        </li>
                                        <li class="farming__list-item">
                                            <h5>$2024.00</h5>
                                            <p>LP Price</p>
                                        </li>
                                        <li class="farming__list-item">
                                            <h5>$58,300,00</h5>
                                            <p>Total Value Locked</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- <transition name="slide"> -->
                            <div v-if="content === index && isShow" class="farming__item-body"
                                :id="`farming__content${index}`">
                                <div class="farming__item-content">
                                    <div class="row g-5">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="farming__deposit">
                                                <div class="farming__deposit-field">
                                                    <h6 class="form-label">Deposit</h6>
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder="0.00"
                                                            aria-label="Deposit input">
                                                        <span class="input-group-text">max</span>
                                                    </div>
                                                    <div class="text-end">
                                                        <button type="submit"
                                                            class="default-btn default-btn--small">Approve</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="farming__withdraw">
                                                <div class="farming__withdraw-field">
                                                    <h6 class="form-label">Withdraw</h6>
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder="0.00"
                                                            aria-label="Withdraw input">
                                                        <span class="input-group-text">max</span>
                                                    </div>
                                                    <div class="text-end">
                                                        <button type="submit"
                                                            class="default-btn default-btn--small">Withdraw</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="farming__claim">
                                                <div class="farming__claim-title">
                                                    <h6>Pending Rewards</h6>
                                                    <h4>0.00 BUSD</h4>
                                                </div>
                                                <div class="text-end">
                                                    <button class="default-btn default-btn--small">Claim</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- </transition> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FarmingList',
    setup() {
        const farmingList = [
            {
                image: '/images/igo/author/1.png',
                title: 'TorkPad LP Stacking',
                author: 'TX-BNB/ TPAD',
                apy: 74
            },
            {
                image: '/images/igo/author/2.png',
                title: 'TorkPad LP Stacking',
                author: 'TX-BNB/ TPAD',
                apy: 47
            },
            {
                image: '/images/igo/author/3.png',
                title: 'TorkPad LP Stacking',
                author: 'TPAD-BNB/ TYPAD',
                apy: 39
            },
            {
                image: '/images/igo/author/4.png',
                title: 'DoccerX LP Stacking',
                author: 'SCX-BNB/ TYPAD',
                apy: 59
            },
        ];

        // expose to template and other options API hooks
        return {
            farmingList,
        };
    },
    data() {
        return {
            content: false,
            isShow: false
        }
    },
    methods: {
        showContent(index) {
            this.content = index;
            this.isShow ^= true;
        }
    },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: height 2s;
    overflow: hidden;
    height: fit-content;
}

.slide-enter,
.slide-leave-to {
    overflow: hidden;
    height: 0;
}

// .slide-enter-active,
// .slide-leave-active {
//     
// }

// .slide-enter-to,
// .slide-leave {
//     overflow: hidden;
//     height: fit-content;
// }

// .slide-enter,
// .slide-leave-to {
//     overflow: hidden;
//     height: 0;
// }
</style>