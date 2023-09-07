<template>
  <article>
    <div class="post-item-2 mt-2 mt-4 pt-2">
      <div class="post-inner">
        <div class="post-thumb mb-30 px-24 pt-24">
          <QuoteImage
            id="og-image"
            :author="singleQuote?.author"
            :quote="singleQuote?.quote"
          />
        </div>
        <div class="post-content pt-0">
          <div class="tags-area px-3 px-md-4 pb-3 pb-md-4">
            
              <ul class="social justify-content-center">
                <li class="social__item">
                  <a
                    :href="`https://twitter.com/share?url=${sharableLink}&text=${singleQuote?.quote}`"
                    target="_blank"
                    class="social__link"
                  >
                  <nuxt-icon name="brands/twitter"/>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://www.facebook.com/sharer.php?u=${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                  <nuxt-icon name="brands/facebook"/>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://www.linkedin.com/shareArticle?url=${sharableLink}&title=${singleQuote?.quote}`"
                    target="_blank"
                    class="social__link"
                  >
                  <nuxt-icon name="brands/linkedin-fill"/>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`fb-messenger://share/?link=${singleQuote?.quote} ${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                  <nuxt-icon name="brands/messenger-fill"/>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://wa.me/?text=${singleQuote?.quote}${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                  <nuxt-icon name="brands/outline-whatsapp"/>
                  </a>
                </li>
              </ul>
            <ul class="tags lab-ul justify-content-center">
              <li v-for="(item, index) in singleQuote?.tags">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="singleQuote && singleQuote.comments && singleQuote.comments.length" id="comments" class="comments">
      <h4 class="comment-title h7">{{ singleQuote.comments.length }} Comment</h4>
      <ul class="lab-ul comment-list">
        <li v-for="(item, index) in singleQuote.comments" class="comment" id="li-comment-1">
          <div class=" d-flex p-4 gap-5">
            <div class=" d-flex justify-content-center align-items-center">
              <div class="p-2">
                {{ getFirstLetters("sdf sdfaf") }}
              </div>
            </div>
            <div class="com-content">
              <div class="com-title">
                <div class="com-title-meta">
                  <a href="#" class="h7">Alex Rock</a>
                  <span> October 5, 2023 at 12:41 pm </span>
                </div>
              </div>
              <p class="mb-0">{{ item.comment }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="authenticated" id="respond" class="comment-respond">
      <h4 class="h7">Leave a Comment</h4>
      <div class="add-comment">
        <form action="#" method="post" id="commentform" class="comment-form">
          <textarea
            id="comment-reply"
            name="comment"
            rows="7"
            placeholder="Type Here Your Comment*"
          ></textarea>
          <button type="submit" class="default-btn">
            <span>Send Comment</span>
          </button>
        </form>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import QuoteImage from "@/components/partials/quote/QuoteImage.vue";
import { toPng } from "html-to-image";
import { IQuoeteItem } from ".";
import { useAuthStore } from "~/store/auth";

interface Props {
  singleQuote: IQuoeteItem | undefined;
}
const props = defineProps<Props>();
const route = useRoute();
const ogImage = ref("");
const { authenticated, getUserProfile } = storeToRefs(useAuthStore());
const sharableLink = ref<string>("");

const generateImage = async () => {
  const div: HTMLElement | string = document.querySelector("#og-image") ?? "";
  if (div) {
    const dataUrl = await toPng(div);
    ogImage.value = dataUrl;
    console.log(ogImage.value);
  } else {
    console.log("It's failed");
  }
};

function getFirstLetters(str: string) {
  var words = str.split(" ");
  if (words.length >= 2) {
    return words[0][0] + words[1][0];
  } else {
    return "";
  }
}

onMounted(() => {
  sharableLink.value = location.origin + route.href;
});


</script>
