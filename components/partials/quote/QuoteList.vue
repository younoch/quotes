<template>
  <section class="project pb-2 pb-md-5 project--completed2">
    <div class="project__wrapper">
      <div v-if="quoteList.length" class="row g-2 g-md-3">
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
            <TextClamp
              :id="'text' + item._id"
              :paragraph="item.quote"
              :lines="2"
            />
            <div class="d-flex justify-content-between">
              <p class="text-end mb-0">— {{ item.author }}</p>
              <nuxt-link
                :to="`/quote/single?id=${item._id}`"
                class="btn btn-outline-info btn-sm"
                @click="pushChild(item)"
              >
                <i class="fa fa-share-alt" aria-hidden="true"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextClamp from "@/components/reusable/textformat/TextClamp.vue";
import { IQuoeteItem } from "./";
import { useQuoteStore } from "~/store/quote";

interface Props {
  quoteList: IQuoeteItem[];
}

const props = withDefaults(defineProps<Props>(), {});

const router = useRouter();
const { selectQuote } = useQuoteStore();

function pushChild(item: IQuoeteItem) {
  selectQuote(item);
}
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
