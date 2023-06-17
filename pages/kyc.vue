<template>
    <div>
        <!-- ==========>> KYC Section start Here <<========== -->
        <section class="kyc padding-top padding-bottom">
            <div class="container">
                <div class="kyc__wrapper">
                    <form class="kyc__form" id="kycForm" action="#!">
                        <!-- start step indicators -->
                        <div class="form-header d-flex">
                            <span class="stepIndicator"
                                :class="{ active: activeID >= 1, finish: activeID >= 2 }">Account
                                Setup</span>
                            <span class="stepIndicator" :class="{ active: activeID >= 2, finish: activeID >= 3 }">Social
                                Profiles</span>
                            <span class="stepIndicator"
                                :class="{ active: activeID >= 3, finish: activeID >= 4 }">Personal Details</span>
                        </div>
                        <!-- end step indicators -->

                        <!-- step one -->
                        <div class="step" :style="{ display: activeID == 1 ? 'block' : 'none' }">
                            <h4 class="text-center">Choose Varification Option</h4>


                            <div class="form-group mb-5">
                                <h6>Select Region</h6>
                                <select class="form-select" aria-label="Select Region">
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Spain</option>
                                </select>
                            </div>

                            <div class="form-group mb-4">
                                <h6>Select Identity Type</h6>
                                <div class="select-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="identy-check" id="nid-check">
                                        <label class="form-check-label" for="nid-check">
                                            National ID
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="identy-check"
                                            id="passport-check" checked>
                                        <label class="form-check-label" for="passport-check">
                                            Passport
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="identy-check"
                                            id="license-check" checked>
                                        <label class="form-check-label" for="license-check">
                                            Driving License
                                        </label>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <!-- step two -->
                        <div class="step"
                            :style="{ display: activeID == 2 ? 'block' : 'none', content: activeID == 2 ? 'block' : 'none' }">
                            <h4 class="text-center">Upload Documents</h4>
                            <ul class="upload__list mb-5">
                                <li class="upload__item">
                                    <div class="custom-upload">
                                        <span><i class="fa-solid fa-cloud-arrow-up"></i></span>
                                        <input class="fileUp" type="file" name="nid-front">
                                    </div>
                                    <p>NID Front Photo</p>
                                </li>
                                <li class="upload__item">
                                    <div class="custom-upload">
                                        <span><i class="fa-solid fa-cloud-arrow-up"></i></span>
                                        <input class="fileUp" type="file" name="nid-back">
                                    </div>
                                    <p>NID Back Photo</p>
                                </li>
                                <li class="upload__item">
                                    <div class="custom-upload">
                                        <span><i class="fa-solid fa-cloud-arrow-up"></i></span>
                                        <input class="fileUp" type="file" name="selfie-with-nid">
                                    </div>
                                    <p>Selfie With NID</p>
                                </li>
                            </ul>

                            <ul class="rules__list mb-5">
                                <li class="rules__item"> <span><i class="fa-solid fa-square-check"></i></span> File
                                    Accepted: JPEG/JPG/PNG (Max size: 10 MB) </li>
                                <li class="rules__item rules__item--active"> <span><i
                                            class="fa-solid fa-square-check"></i></span> Document
                                    should be good condition </li>
                                <li class="rules__item"> <span><i class="fa-solid fa-square-check"></i></span> Face
                                    must be
                                    clear visible</li>
                                <li class="rules__item"> <span><i class="fa-solid fa-square-check"></i></span>
                                    Document must
                                    be valid period</li>
                            </ul>
                            <div class="form-group mb-5">
                                <h6>Enter NID Number</h6>
                                <input class="form-control" type="text" name="nid-number"
                                    placeholder="eg: 29348 9348 398">
                            </div>
                        </div>

                        <!-- step three -->
                        <div class="step" :style="{ display: activeID == 3 ? 'block' : 'none' }">
                            <h4 class="text-center">Personal Information</h4>

                            <div class="form-group mb-4">
                                <h6>Full Name</h6>
                                <input class="form-control" type="text" name="Full Name" placeholder="eg: Alex Hales">
                            </div>
                            <div class="form-group mb-4">
                                <h6>State/Provience</h6>
                                <input class="form-control" type="text" name="state Name" placeholder="eg: Los Angeles">
                            </div>
                            <div class="form-group mb-4">
                                <h6>Address Line</h6>
                                <input class="form-control" type="text" name="address line"
                                    placeholder="eg: 653 Jett Lane">
                            </div>
                            <div class="form-group mb-4">
                                <h6>City Name</h6>
                                <input class="form-control" type="text" name="city name" placeholder="eg: Los Angeles">
                            </div>
                            <div class="form-group mb-4">
                                <h6>Postal Code</h6>
                                <input class="form-control" type="text" name="Postal code" placeholder="eg: 90017">
                            </div>
                        </div>

                        <!-- start previous / next buttons -->
                        <div class="form-footer d-flex">
                            <button type="button" v-if="activeID != 1" id="prevBtn"
                                @click="stepBackword">Previous</button>
                            <button type="button" v-if="activeID >= 3" id="nextBtn" @click="submit">Submit</button>
                            <button type="button" v-if="activeID < 3" id="nextBtn" @click="stepForword">Next</button>

                        </div>
                        <!-- end previous / next buttons -->
                    </form>

                </div>
            </div>
        </section>
        <!-- ==========>> KYC Section Ends Here <<========== -->

    </div>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";
import { submit } from "dom7";
definePageMeta({
    layout: "inner",
});
export default {
    scrollToTop: true,
    setup() {
        const activeID = 1;
        const layoutStore = useLayoutStore();
        layoutStore.assignLayoutData({ title: 'KYC Page', subtitle: "KYC" })
        return {
            activeID
        }
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
    methods: {
        stepForword() {
            this.activeID++
        },
        stepBackword() {
            this.activeID--
        },
        submit() {
            this.$nuxt.refresh()
        }
    },
}
</script>

<style>

</style>