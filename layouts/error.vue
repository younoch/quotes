<template>
    <div>
        <!-- <PagesPaginateError /> -->
        <h1>ERROcvxzvcxR</h1>
    </div>
</template>

<script>
export default {
    name: 'nuxt-error',
    props: {
        error: {
            type: Object,
            default: () => { },
        },
    },
    computed: {
        errorPage() {
            if (this.error.statusCode === 404) {
                return error404;
            }
            // catch everything else
            return error500;
        },
    }
}
</script>