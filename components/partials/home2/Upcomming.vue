<template>
    <section class="project padding-top padding-bottom">
        <div class="container">
            <ReusableHeader subtitle="Projects" title="Upcoming IDOs" />
            <div class="project__wrapper">
                <div class="row g-4">
                    <div v-for="(item, index) in projectList" :key="index" class="col-lg-4 col-sm-6">
                        <ProjectCard :projectDetails="item" />
                    </div>
                </div>
                <div v-if="isViewMore" class="text-center mt-5">
                    <nuxt-link to="/project" class="default-btn"><span>View More</span></nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from '@/components/reusable/cards/ProjectCard.vue'
export default {
    props: ['projectList', 'isViewMore'],
    components: {
        ProjectCard
    },
}
</script>