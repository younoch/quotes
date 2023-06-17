<template>
    <div class="project__item" :style="{ 'background-color': dark ? '#02121D' : '' }">
        <div class="project__item-inner">
            <div class="project__item-thumb">
                <img :src="projectDetails.cover" alt="IGO cover">
                <span class="badge"><img :src="projectDetails.logo" alt="chain logo"></span>
            </div>
            <div class="project__item-content">
                <div class="project__item-top">
                    <div class="project__item-author">
                        <a href="#"><img :src="projectDetails.authImg" alt="author image"></a>
                        <h4 :style="{ 'background-color': dark ? '#02121D' : '' }">{{ projectDetails.title }}</h4>
                    </div>

                </div>
                <div class="project__item-middle">
                    <ul v-if="!dark" class="project__infolist">
                        <li class="project__infolist-item">
                            <p class="project__infolist-name">Round Name:</p>
                            <p class="project__infolist-data">Public</p>
                        </li>
                        <li class="project__infolist-item">
                            <p class="project__infolist-name">Participent</p>
                            <p class="project__infolist-data">42</p>
                        </li>
                        <li class="project__infolist-item">
                            <p class="project__infolist-name">Project Start</p>
                            <p class="project__infolist-data">TBA</p>
                        </li>
                    </ul>

                    <div class="project__item-amount">
                        <p>Raised Ammount</p>
                        <h6><span class="color--theme-color">5000</span> / <span>15000
                                BUSD</span>
                        </h6>
                        <div class="progress" :style="{ 'background-color': dark ? '#0A1F2F ' : '' }">
                            <div class="progress-bar" role="progressbar" :style="{ width: `${randomNumber}%` }"
                                :aria-valuenow="randomNumber" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="project__item-bottom">

                    <nuxt-link href="/project/project-details" class="default-btn default-btn--small">View
                        Details</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projectDetails', 'dark'],
    data() {
        return {
            randomNumber: Math.floor(Math.random() * 100)
        }
    },
}
</script>