<template>
  <div class="blog padding-bottom">
    <div class="container">
      <div class="blog__wrapper">
        <div class="row">
          <div class="col-lg-8">
            <MainSide :singleQuote="singleQuote" />
          </div>
          <div class="col-lg-4">
            <LeftSide />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLayoutStore } from "~/stores/layout";
import LeftSide from "@/components/partials/blog/LeftSide.vue";
import MainSide from "@/components/partials/quote/MainSide.vue";
import { useQuoteStore } from "~/stores/quote";
import { IQuoeteList } from "~/components/partials/quote";

const { get } = useApi();
const route = useRoute();
const layoutStore = useLayoutStore();
const { getQuoteList, getTagList } = storeToRefs(useQuoteStore());

layoutStore.assignLayoutData({
  title: "Blog Details",
  subtitle: "Blog Single",
});

const singleQuote = ref<IQuoeteList>();

if (getQuoteList.value.length) {
  singleQuote.value = getQuoteList.value.find(
    (element) => element._id === route.query.id
  );
} else {
  await get("/get-single-quote/" + route.query.id)
    .then((res) => {
      singleQuote.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}
</script>
