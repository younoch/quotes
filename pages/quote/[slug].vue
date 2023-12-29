<template>
  <div>
    <div v-if="data" class="blog padding-bottom">
      <div class="container">
        <div class="blog__wrapper">
          <div class="row">
            <div class="col-lg-8">
              <MainSide :singleQuote="data.data" />
            </div>
            <div class="col-12 col-md-4 mt-2 mt-4">
              <aside class="ps-lg-1">
                <Category class="mb-2 mb-md-4" />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="preloader">
      <div class="preloader__inner">
        <div class="preloader__icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainSide from "@/components/partials/quote/MainSide.vue";
import Category from "@/components/partials/quote/Category.vue";

const route = useRoute();
const fullPath: any = computed(() => route.fullPath).value

const key = computed(() => "single-quote-" + route.params.slug).value;

const url = computed(
  () =>
    useRuntimeConfig().public.API_URL + "/get-quote-by-slug/" + route.params.slug
);

const { data, pending, error, refresh } = await useAsyncData(key, () => {
  return fetch(url.value).then((res: any) => res.json());
});

watchEffect(() => {
  refresh();
});


useSeoMeta({
  title: () => data.value.data?.author,
  ogType: "website",
  ogTitle: () => data.value.data?.author,
  description: () => data.value.data?.quote,
  ogDescription: () => data.value.data?.quote,
  applicationName: "The Speakers",
  ogImage: data.value.data?.image,
  ogUrl: useRuntimeConfig().public.SITEMAP +  fullPath,
  twitterImage: data.value.data?.image,
  contentType: "text/html; charset=utf-8",
  keywords: () => data.value.data?.tags?.toString(),
});
useHead({
  meta: [
    {
      name: "keywords",
      content: () =>
        data.value.data?.quote + ", " + data.value.data?.tags?.toString(),
    },
    {
      property: "twitter:title",
      name: "twitter:title",
      content: () => data.value.data?.author,
    },
    {
      property: "og:title",
      content: () => data.value.data?.author,
    },
    {
      name: "twitter:description",
      content: () => data.value.data?.quote,
    },
    {
      property: "og:description",
      content: () => data.value.data?.quote,
    },
    {
      property: "fb:title",
      content: () => data.value.data?.author,
    },
    {
      property: "fb:description",
      content: () => data.value.data?.quote,
    },
    {
      property: "linkedin:title",
      content: () => data.value.data?.author,
    },
    {
      property: "linkedin:description",
      content: () => data.value.data?.quote,
    },
  ],
  link: [
    {
      rel: "apple-touch-icon",
      href: "/images/the-speakers-favicon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
  ],
});
</script>
