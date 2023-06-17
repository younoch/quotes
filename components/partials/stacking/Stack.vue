<template>
    <div class="stacking padding-top padding-bottom">
        <div class="container">
            <div class="stacking__wrapper">
                <div class="stacking__project">
                    <div class="row g-4">
                        <div class="col-lg-4 col-sm-6">
                            <div class="stacking__project-item">
                                <div class="stacking__project-itemInner">
                                    <h3>$ <span class="purecounter" data-purecounter-start="639499"
                                            data-purecounter-end="63939379">6,368,143.24</span> </h3>
                                    <p>Total Value Locked</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="stacking__project-item">
                                <div class="stacking__project-itemInner">
                                    <h3><span class="purecounter" data-purecounter-start="0"
                                            data-purecounter-end="136.99">136</span>.99 %</h3>
                                    <p>Apy</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <div class="stacking__project-item">
                                <div class="stacking__project-itemInner">
                                    <h3><span class="purecounter" data-purecounter-start="0"
                                            data-purecounter-end="69899">69899</span> </h3>
                                    <p>Number of Stakers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="stacking__details">
                    <div class="stacking__title">
                        <h3>Participate IDO Stack</h3>
                    </div>

                    <div class="stacking__content">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-7">
                                <div class="stacking__ammount">
                                    <p>Total Stack</p>
                                    <h4>350.70 BUSD</h4>
                                </div>
                                <div class="stacking__period">
                                    <ul class="stacking__period-list nav nav-pills" id="stackingPeriod" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="period-tab1" data-bs-toggle="tab"
                                                data-bs-target="#period-tab1-pane" type="button" role="tab"
                                                aria-controls="period-tab1-pane" aria-selected="true">7
                                                Days</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="period-tab2" data-bs-toggle="tab"
                                                data-bs-target="#period-tab2-pane" type="button" role="tab"
                                                aria-controls="period-tab2-pane" aria-selected="false">14
                                                Days</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="period-tab3" data-bs-toggle="tab"
                                                data-bs-target="#period-tab3-pane" type="button" role="tab"
                                                aria-controls="period-tab3-pane" aria-selected="false">30
                                                Days</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="period-tab4" data-bs-toggle="tab"
                                                data-bs-target="#period-tab4-pane" type="button" role="tab"
                                                aria-controls="period-tab4-pane" aria-selected="false">60
                                                Days</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div v-for="(item, index) in stockInfo" :key="index" class="tab-pane fade"
                                            :class="index == 0 ? 'show active' : ''" :id="`period-tab${index + 1}-pane`"
                                            role="tabpanel" :aria-labelledby="`period-tab${index + 1}`" tabindex="0">
                                            <div class="stacking__info">
                                                <div class="row align-items-center g-5">
                                                    <div class="col-sm-8">
                                                        <ul class="stacking__info-list">
                                                            <li class="stacking__info-item">
                                                                <p class="stacking__info-name">Lock Period:
                                                                    <span class="stacking__info-value">{{
        item.lockPeriod
}} Days</span>
                                                                </p>
                                                            </li>
                                                            <li class="stacking__info-item">
                                                                <p class="stacking__info-name">Re-locks on
                                                                    registration:
                                                                    <span class="stacking__info-value">{{
        item.reLock
}}</span>
                                                                </p>
                                                            </li>
                                                            <li class="stacking__info-item">
                                                                <p class="stacking__info-name">Early unstake fee:
                                                                    <span class="stacking__info-value"> {{
        item.unstackFee
}}%</span>
                                                                </p>
                                                            </li>
                                                            <li class="stacking__info-item">
                                                                <p class="stacking__info-name">Status:
                                                                    <span class="stacking__info-value">{{
        item.status
}}</span>
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="stacking__apy">
                                                            <p>APY Rate </p>
                                                            <h3>{{ item.apyRate }}%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-5 col-md-8">
                                <div class="stacking__approve">
                                    <div class="stacking__approve-field mb-5">
                                        <label for="approve-stack" class="form-label">Balance: <span>3529.00
                                                BUSD</span>
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" aria-label="Approve Stack"
                                                id="approve-stack" placeholder="0.00">
                                            <span class="input-group-text">Max</span>
                                            <button class="input-group-btn">Approve</button>
                                        </div>
                                    </div>
                                    <div class="stacking__approve-withdraw">
                                        <label for="withdraw-stack" class="form-label">Staked: <span>350.70
                                                BUSD</span>
                                        </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" aria-label="Withdraw Stack"
                                                id="withdraw-stack" placeholder="0.00">
                                            <span class="input-group-text">Max</span>
                                            <button class="input-group-btn withdraw-btn">Withdraw</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="note-text"><strong>Note:</strong>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae expedita error quod!
                            Eaque, laudantium hic.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const stockInfo = [
            {
                lockPeriod: 7,
                reLock: "Yes",
                unstackFee: 23,
                status: 'Unlocked',
                apyRate: 10
            },
            {
                lockPeriod: 14,
                reLock: "Yes",
                unstackFee: 23,
                status: 'Unlocked',
                apyRate: 20
            },
            {
                lockPeriod: 30,
                reLock: "Yes",
                unstackFee: 23,
                status: 'Unlocked',
                apyRate: 30
            },
            {
                lockPeriod: 7,
                reLock: "Yes",
                unstackFee: 23,
                status: 'Unlocked',
                apyRate: 10
            },

        ];

        // expose to template and other options API hooks
        return {
            stockInfo,
        };
    },
}
</script>