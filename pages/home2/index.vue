<template>
    <div>

        <Head>
            <Title>Home</Title>
        </Head>
        <Banner />
        <Counter />
        <Upcomming :projectList="projectList" :isViewMore="false" />
        <PreviouseProject class="padding-top" :projectList="projectList" />
        <WeOffer :workList="workList" :dark="true" />
        <Tokenomics :tokenList="tokenList" />
        <RoadMapTwo :roadmapTitles="roadmapTitles" />
        <Team :teamList="teamList" />
        <CommonQueiry />
        <GettingStart :gettingStartList="gettingStartList" />
        <ApplyToLanuch class="padding-top" />
    </div>
</template>

<script>
import axios from 'axios';
import Banner from '@/components/partials/home2/Banner.vue'
import Counter from '@/components/common/Counter.vue'
import Upcomming from '@/components/partials/home2/Upcomming.vue'
import PreviouseProject from '@/components/partials/home2/PreviouseProject.vue'
import WeOffer from '@/components/common/WeOffer.vue'
import Tokenomics from '@/components/partials/home2/Tokenomics.vue'
import CommonQueiry from '@/components/partials/home2/CommonQueiry.vue'
import GettingStart from '@/components/partials/home/GettingStart.vue'
import RoadMapTwo from '@/components/common/RoadMapTwo.vue'
import Team from '@/components/common/Team.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
export default {
    scrollToTop: true,
    components: { Banner, Counter, Upcomming, PreviouseProject, WeOffer, Tokenomics, RoadMapTwo, Team, CommonQueiry, GettingStart, ApplyToLanuch },
    head() {
        return {
            title: "Home",
        }
    },
    data() {
        return {
            projectList: [],
            gettingStartList: [],
            workList: [],
            roadmapTitles: [],
            teamList: [],
            tokenList: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')
            this.projectList = project.data.projectList

            const others = await axios.get('/api/others.json')
            this.gettingStartList = others.data.gettingStartList
            this.workList = others.data.workList
            this.tokenList = others.data.tokenList
            this.roadmapTitles = others.data.roadmapTitles
            this.teamList = others.data.teamList
        },

    }
}
</script>