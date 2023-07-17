<template>
  <section class="project pb-2 pb-md-5 project--completed2">
    <div class="project__wrapper">
      <div class="row g-2 g-md-3">
        <div
          v-for="(item, index) in quoteList"
          :key="'quote' + index"
          class="col-12"
        >
          <div
            class="project__item2 position-relative aos-init"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <TextClamp :id="'text'+item._id" :paragraph="item.quote" :lines="2" />
            <div class="d-flex justify-content-between">
              <p class="text-end mb-0">— {{ item.author }}</p>
              <NuxtLink :to="`/quote/${item._id}`">
                <button type="button" class="btn btn-outline-info btn-sm" @click="nextLink(item._id)">
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                </button>

              </NuxtLink>
                
            </div>
            <!-- <ShareNow/> -->
          </div>
        </div>
      </div>
      <Pagination v-if="pagination" />
      <div
        v-else
        class="text-center mt-3 mt-md-5 aos-init"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <nuxt-link to="/project" class="default-btn"
          ><span>View More</span></nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Pagination from "@/components/reusable/buttuns/Pagination.vue";
import ShareNow from "@/components/common/ShareNow.vue";
import TextClamp from "@/components/reusable/textformat/TextClamp.vue";
import { IQuoeteList } from "./";

interface Props {
  quoteList: IQuoeteList[];
  pagination?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
});
</script>

<style scoped lang="scss">
.quate-content {
  text-indent: 1em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.share-button {
  background-color: transparent;

}
</style>
