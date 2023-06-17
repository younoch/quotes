<template>
    <div class="home-3">

        <Head>
            <Title>Home</Title>
        </Head>
        <Banner />
        <Projects :completedProject="completedProject" />
        <GettingStart :gettingStartList="gettingStartList" :dark="true" />

        <PreviouseProject :projectList="projectList"
            style="background-image: url(/images/project/bg.png); background-size: cover; background-position: center; background-attachment: fixed;"
            :dark="true" />
        <WeOffer :workList="workList" :dark="true" />
        <div class="token shape-fadeBlob--left">

            <Tokenomics :tokenList="tokenList" />
        </div>
        <RoadMapOne :roadmapTitles="roadmapTitles" />
        <Team :teamList="teamList" />
        <CommonQueiry />
        <ApplyToLanuch class="padding-top" />
    </div>
</template>

<script>
import axios from 'axios';
import Banner from '@/components/partials/home3/Banner.vue'
import Projects from '@/components/partials/home3/Projects.vue'
import GettingStart from '@/components/partials/home/GettingStart.vue'
import PreviouseProject from '@/components/partials/home2/PreviouseProject.vue'
import WeOffer from '@/components/common/WeOffer.vue'
import Tokenomics from '@/components/partials/home2/Tokenomics.vue'
import CommonQueiry from '@/components/partials/home2/CommonQueiry.vue'
import RoadMapOne from '@/components/common/RoadMapOne.vue'
import Team from '@/components/common/Team.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
export default {
    scrollToTop: true,
    components: { Banner, Projects, PreviouseProject, WeOffer, Tokenomics, RoadMapOne, Team, CommonQueiry, GettingStart, ApplyToLanuch },
    head() {
        return {
            title: "Home",
        }
    },
    data() {
        return {
            projectList: [],
            completedProject: [],
            gettingStartList: [],
            workList: [],
            tierSystem: [],
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
            this.completedProject = project.data.completedProject

            const others = await axios.get('/api/others.json')
            this.gettingStartList = others.data.gettingStartList
            this.workList = others.data.workList
            this.tokenList = others.data.tokenList
            this.tierSystem = others.data.tierSystem
            this.roadmapTitles = others.data.roadmapTitles
            this.teamList = others.data.teamList
        },

    }
}
</script>

<style lang="scss">
.home-3 {
    background-color: #02121D;
    // background-image: url(/images/shape/noise.gif);
    // background-blend-mode: multiply;
    // background-repeat: repeat;
    background-position: left top;
}
</style>