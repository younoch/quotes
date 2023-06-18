<template>
    <div class="section-header section-header--middle mt-2 mt-md-3 mt-lg-5">
        <div class="section-header__content">
            <div class="section-header__titlebar">
                <p class="section-header__subtitle"> {{ subtitle }}</p>
                <h2 class="section__header__title">{{ title }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>