<template>
    <section class="team padding-bottom shape-1r" id="team">
        <div class="container">
            <ReusableHeader subtitle="Team" title="Meet the Crew" />
            <div class="team__wrapper">
                <div class="row justify-content-center g-4">
                    <div v-for="(item, index) in teamList" :key="index" class="col-lg-3 col-sm-6">
                        <div class="team__item" data-aos="fade-up" data-aos-duration="800">
                            <div class="team__thumb">
                                <img :src="item.img" alt="Team Member Image">
                            </div>
                            <div class="team__content">
                                <h4><nuxt-link to="/team/team-member">{{ item.name }}</nuxt-link></h4>
                                <p>{{ item.role }}</p>
                                <ul class="social">
                                    <li class="social__item">
                                        <a href="#" class="social__link"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="social__item">
                                        <a href="#" class="social__link"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li class="social__item">
                                        <a href="#" class="social__link"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="social__item">
                                        <a href="#" class="social__link"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['teamList']
}
</script>

<style>

</style>