<template>
    <div class="counter__section counter__section--uplift">
        <div class="container">
            <div class="counter__wrapper" data-aos="fade-up" data-aos-duration="1000">
                <div class="row g-5 justify-content-center align-items-center">
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter__item">
                            <h3>$<span data-purecounter-start="0" data-purecounter-end="565"
                                    class="purecounter">565</span>M
                            </h3>
                            <p>Total Ammount Raised</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter__item">
                            <h3><span data-purecounter-start="0" data-purecounter-end="120"
                                    class="purecounter">120</span>M+
                            </h3>
                            <p>Accredited investors</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter__item">
                            <h3><span data-purecounter-start="0" data-purecounter-end="999"
                                    class="purecounter">999</span>+
                            </h3>
                            <p>Project Completed</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter__item">
                            <h3><span data-purecounter-start="0" data-purecounter-end="65"
                                    class="purecounter">65</span>M
                            </h3>
                            <p>Varified User</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: [
                {
                    value: 565
                }
            ]
        }
    },
}
</script>