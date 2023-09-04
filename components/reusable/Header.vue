<template>
    <div class="section-header section-header--middle mt-2 mt-md-3 mt-lg-5">
        <div class="section-header__content">
            <div class="section-header__titlebar">
                <b class="section-header__subtitle "> {{ subtitle }}</b>
                <h1 class="section__header__title text-capitalize fs-3 mb-0 mb-md-1">{{ title }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>