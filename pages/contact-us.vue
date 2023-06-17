<template>
    <section class="contact padding-top padding-bottom">
        <div class="container">
            <div class="section-header section-header--middle">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <h2 class="section__header__title"> Get In Touch
                        </h2>
                    </div>
                </div>
            </div>
            <div class="contact__wrapper">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <form action="#" class="form">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" placeholder="Your Name*" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" placeholder="Your Email*" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="tel" placeholder="Your No*" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="text" placeholder="Subject*" required>
                                </div>
                                <div class="col-12">
                                    <textarea placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="default-btn"><span>Send Your Message</span></button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <ApplyToLanuch class="padding-top" />
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import axios from 'axios';
import ApplyToLanuch from '@/components/common/ApplyToLanuch.vue'
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    components: { ApplyToLanuch },
    setup() {
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'Stacking', subtitle: "stacking" })
        return {}
    },
    head() {
        return {
            title: "Tokenomics",
        }
    },
    data() {
        return {
            projectList: [],
            completedProjectList: [],
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
            this.tokenList = others.data.tokenList
        },
    }
}
</script>

<style>

</style>