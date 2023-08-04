<template>
    <div>

        <Head>
            <Title>Home</Title>
        </Head>
        <Banner />
        <FeaturedProject :projectList="projectList" />
        <GettingStart :gettingStartList="gettingStartList" />
        <UpcomingIDO :projectList="projectList" allButtonTitle="View All" redirectUrl="/project" />
        <CompletedProject :completedProjectList="completedProjectList" />
        <WeOffer :workList="workList" class="padding-bottom" />
        <TierSystem :tierSystem="tierSystem" />
        <RoadMapOne :roadmapTitles="roadmapTitles" />
        <Team :teamList="teamList" />
        <ApplyToLanuch />
    </div>
</template>

<script>
import axios from 'axios';
import Banner from '@/components/partials/home/Banner.vue'
import FeaturedProject from '@/components/partials/home/FeaturedProject.vue'
import GettingStart from '@/components/partials/home/GettingStart.vue'
import UpcomingIDO from '@/components/common/UpcomingIDO.vue'
import CompletedProject from '@/components/partials/home/CompletedProject.vue'
import WeOffer from '@/components/common/WeOffer.vue'
import TierSystem from '@/components/partials/home/TierSystem.vue'
import RoadMapOne from '@/components/common/RoadMapOne.vue'
import Team from '@/components/common/Team.vue'
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
export default {
    scrollToTop: true,
    components: { Banner, FeaturedProject, GettingStart, CompletedProject, UpcomingIDO, WeOffer, TierSystem, RoadMapOne, Team, ApplyToLanuch },
    head() {
        return {
            title: "Home",
        }
    },
    data() {
        return {
            projectList: [],
            gettingStartList: [],
            completedProjectList: [],
            workList: [],
            tierSystem: [],
            roadmapTitles: [],
            teamList: []
        }
    },
    created() {
        this.fetchAll()
    },
    methods: {
        async fetchAll() {
            const project = await axios.get('/api/project.json')
            this.projectList = project.data
            this.completedProjectList = project.data.completedProject

            const others = await axios.get('/api/others.json')
            this.gettingStartList = others.data.gettingStartList
            this.workList = others.data.workList
            this.tierSystem = others.data.tierSystem
            this.roadmapTitles = others.data.roadmapTitles
            this.teamList = others.data.teamList
        },

    }
}
</script>