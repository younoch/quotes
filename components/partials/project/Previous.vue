<template>
    <section class="project padding-top padding-bottom bg--primary-color">
        <div class="container">
            <div class="section-header section-header--left">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <p class="section-header__subtitle"> Completed</p>
                        <h2 class="section__header__title">Previous Projects</h2>
                    </div>
                    <a href="#" class="default-btn default-btn--small">View Rank</a>
                </div>
            </div>
            <div class="project__wrapper">
                <div class="row g-4">
                    <div v-for="(item, index) in projectList" :key="index" class="col-lg-4 col-sm-6">
                        <ProjectCard :projectDetails="item" :dark="dark" />
                    </div>
                </div>
                <ul class="pagination mt-5 justify-content-center">
                    <li class="page-item disabled">
                        <span class="page-link">
                            <i class="fa-solid fa-angle-left"></i></span>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from '@/components/reusable/cards/ProjectCard.vue'
export default {
    props: ['projectList', 'dark'],
    components: {
        ProjectCard
    },
}
</script>