<template>
  <section class="project pb-2 pb-md-5 project--completed2">
    <div class="project__wrapper">
      <div v-if="quoteList.length" class="row g-1 g-md-2">
        <div
          v-for="(item, index) in quoteList"
          :key="'quote' + index"
          class="col-12"
        >
          <blockquote
            class="project__item2 position-relative aos-init mb-0"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <TextClamp
              :id="'text' + item._id"
              :paragraph="item.quote"
              :lines="2"
              @click="pushChild(item)"
            />
            <div class="d-flex justify-content-between">
              <cite class="text-end mb-0 text-capitalize">— {{ item.author }}</cite>
              <div class="d-flex gap-2">
                <span
                  class="btn btn-outline-info btn-sm copy-btn py-0 px-1"
                  :id="'copy' + item._id"
                  hidden
                  >Copied!</span
                >
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm py-0 px-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Copy the quote"
                  @click="copyText(item)"
                >
                <p class="mb-0 fw-bold size-15">
                  Copy
                </p>
                </button>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TextClamp from "@/components/reusable/textformat/TextClamp.vue";
import type { IQuoeteItem } from ".";

interface Props {
  quoteList: IQuoeteItem[];
}

const props = withDefaults(defineProps<Props>(), {});
const route = useRoute();

function pushChild(item: IQuoeteItem) {
  navigateTo(`/quote/${item.slug}`)
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
