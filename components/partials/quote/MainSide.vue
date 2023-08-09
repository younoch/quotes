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
            <client-only>
              <ul class="social justify-content-center">
                <li class="social__item">
                  <a
                    :href="`https://twitter.com/share?url=${sharableLink}&text=${singleQuote?.quote}`"
                    target="_blank"
                    class="social__link"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://www.facebook.com/sharer.php?u=${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://www.linkedin.com/shareArticle?url=${sharableLink}&title=${singleQuote?.quote}`"
                    target="_blank"
                    class="social__link"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`fb-messenger://share/?link=${singleQuote?.quote} ${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                    <i class="fab fa-facebook-messenger"></i>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    :href="`https://wa.me/?text=${singleQuote?.quote}${sharableLink}`"
                    target="_blank"
                    class="social__link"
                  >
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </client-only>
            <ul class="tags lab-ul justify-content-center">
              <li v-for="(item, index) in singleQuote?.tags">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="comments" class="comments">
      <h4 class="comment-title h7">02 Comment</h4>
      <ul class="lab-ul comment-list">
        <li class="comment" id="li-comment-1">
          <div class="com-item">
            <div class="com-thumb">
              <img
                alt=""
                src="/images/blog/author/02.png"
                srcset="/images/blog/author/02.png"
                class="avatar avatar-90 photo"
                height="90"
                width="90"
              />
            </div>
            <div class="com-content">
              <div class="com-title">
                <div class="com-title-meta">
                  <a href="#" class="h7">Alex Rock</a>
                  <span> October 5, 2023 at 12:41 pm </span>
                </div>
                <span class="reply">
                  <a
                    class="comment-reply-link"
                    href="#"
                    aria-label="Reply to Masum"
                    ><i class="fa-solid fa-reply-all"></i> Reply</a
                  >
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores deserunt dolorem facilis ullam fugiat.
              </p>
            </div>
          </div>
          <ul class="lab-ul comment-list">
            <li class="comment" id="li-comment-2">
              <div class="com-thumb">
                <img
                  alt=""
                  src="/images/blog/author/03.png"
                  class="avatar avatar-90"
                  height="90"
                  width="90"
                />
              </div>
              <div class="com-content">
                <div class="com-title">
                  <div class="com-title-meta">
                    <a href="#" rel="external nofollow" class="h7"
                      >Jimmy Leo
                    </a>
                    <span> June 5, 2023 at 2:11 pm </span>
                  </div>
                  <span class="reply">
                    <a
                      class="comment-reply-link"
                      href="#"
                      aria-label="Reply to Rocky"
                      ><i class="fa-solid fa-reply-all"></i> Reply</a
                    >
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusamus totam, eligendi rem dicta facere fuga a vel
                  temporibus fugit.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div id="respond" class="comment-respond">
      <h4 class="h7">Leave a Comment</h4>
      <div class="add-comment">
        <form action="#" method="post" id="commentform" class="comment-form">
          <input name="name" type="text" value="" placeholder="Name*" />
          <input name="email" type="text" value="" placeholder="Email*" />
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
import QuoteImage from "@/components/partials/quote/QuoteImage.vue";
import { toPng } from "html-to-image";
import { IQuoeteItem } from ".";

interface Props {
  singleQuote: IQuoeteItem | undefined;
}
const route = useRoute();
const ogImage = ref("");
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
onMounted(() => {
  sharableLink.value = location.origin + route.href;
});

const props = defineProps<Props>();
</script>
