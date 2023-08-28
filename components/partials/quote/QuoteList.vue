<template>
  <section class="project pb-2 pb-md-5 project--completed2">
    <div class="project__wrapper">
      <div v-if="quoteList.length" class="row g-1 g-md-2">
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
              <p class="text-end mb-0 text-capitalize">— {{ item.author }}</p>
              <div class="d-flex gap-2">
                <span
                  class="btn btn-outline-info btn-sm copy-btn"
                  :id="'copy' + item._id"
                  hidden
                  >Copied!</span
                >
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Copy the quote"
                  @click="copyText(item)"
                >
                  <i class="fa fa-copy" aria-hidden="true"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Share the quote"
                  @click="pushChild(item)"
                >
                  <i class="fa fa-share-alt" aria-hidden="true"></i>
                </button>
              </div>
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
const route = useRoute();

const router = useRouter();
const { selectQuote } = useQuoteStore();

function pushChild(item: IQuoeteItem) {
  selectQuote(item);
  router.push(`/quote/single?id=${item._id}`);
}

async function copyText(item: IQuoeteItem) {
  const copyText =
    item.quote + " - " + item.author + ". " + location.origin + route.href;
  const badgeId = "copy" + item._id;
  const badge = document.getElementById(badgeId);
  try {
    await navigator.clipboard.writeText(copyText);
    if (badge) {
      badge.hidden = false;
      setTimeout(function () {
        badge.hidden = true;
      }, 2500);
    }
  } catch (e) {
    alert("Cannot copy");
  }
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
.copy-btn {
  transition: all 1s ease-in-out;
}
</style>
