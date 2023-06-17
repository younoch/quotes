<template>
    <div>
        <TeamMember />
        <NewLetter class="padding-top" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useLayoutStore } from "~/stores/layout";
import TeamMember from '@/components/partials/team/TeamMember.vue'
import NewLetter from '@/components/common/NewLetter.vue'

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({ title: 'Tokenomics', subtitle: "Tokenomics" })

definePageMeta({
    layout: "inner",
    title: "Tokenomics",
    scrollToTop: true
})
</script>