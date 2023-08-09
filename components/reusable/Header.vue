<template>
    <div class="section-header section-header--middle mt-2 mt-md-3 mt-lg-5">
        <div class="section-header__content">
            <div class="section-header__titlebar">
                <h2 class="section-header__subtitle"> {{ subtitle }}</h2>
                <h1 class="section__header__title text-capitalize">{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>