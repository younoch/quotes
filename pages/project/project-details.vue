<template>
  <section class="pro-details padding-top padding-bottom">
    <Head>
      <Title>Project</Title>
    </Head>
    <div class="container">
      <div class="pro-details__wrapper">
        <!-- project item -->
        <div class="pro-details__block mb-4">
          <div class="pro-details__block-inner">
            <div class="row g-5 align-items-center">
              <div class="col-lg-7">
                <div class="pro-details__item-wrap">
                  <div class="pro-details__item">
                    <div class="pro-details__item-thumb">
                      <img src="/images/igo/author/1.png" alt="IGO Project" />
                    </div>
                    <div class="pro-details__item-content">
                      <h4>Dexer Xone <span>(Bzon)</span></h4>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Repellendus obcaecati quas ex, praesentium omnis
                        cum, corrupti repudiandae placeat sapiente sit
                        exercitationem mollitia veniam illum. Autem nobis
                        aliquid provident illo ad.
                      </p>
                    </div>
                  </div>
                  <div class="btn-group mt-4 d-flex flex-wrap gap-20">
                    <nuxt-link
                      to="/account/login"
                      class="default-btn default-btn--small"
                      ><span>Claim Token</span></nuxt-link
                    >
                    <a
                      href="/account/signup"
                      class="default-btn default-btn--small default-btn--secondary"
                      ><span>Register Now</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="pro-details__info">
                  <div class="row g-3">
                    <div
                      v-for="(item, index) in infolist"
                      :key="index"
                      class="col-sm-6"
                    >
                      <div class="pro-details__info-item">
                        <h6 class="pro-details__info-name">
                          {{ item.title }}
                        </h6>
                        <p class="pro-details__info-value">
                          {{ item.value }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- token infos -->
        <div class="pro-details__token mb-5">
          <div class="row g-4 row-cols-auto">
            <div class="col">
              <div
                class="pro-details__token-item d-flex flex-wrap justify-content-between align-items-center gap-40"
              >
                <div class="pro-details__token-title">
                  <span>$</span>
                  <h6>Token Price :</h6>
                </div>
                <div class="pro-details__token-value">
                  <p>0.25 <sub>USD</sub></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="pro-details__token-item">
                <p>30% at TGE, evenly per quarter 4 quarters, Best Sale!</p>
              </div>
            </div>
            <div class="col">
              <div
                class="pro-details__token-item d-flex flex-wrap justify-content-between align-items-center gap-40"
              >
                <div class="pro-details__token-title">
                  <span>$</span>
                  <h6>Token Price :</h6>
                </div>
                <div class="pro-details__token-value">
                  <p>250000 <sub>USD</sub></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- project description -->
        <div class="pro-details__desc">
          <div class="row flex-lg-row-reverse g-5">
            <div class="col-lg-8">
              <div class="pro-details__desc-content">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#pro-details-navlist"
                  data-bs-smooth-scroll="true"
                  data-bs-root-margin="0px 0px -60%"
                  class="scrollspy-example"
                  tabindex="0"
                >
                  <!-- about -->
                  <section id="pro-details-about">
                    <h4>About The Speakers</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio animi, id ducimus eum tempora minus labore saepe
                      fuga eius dolor non veritatis excepturi perferendis
                      molestiae nulla quia officiis sunt soluta.
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum dolores alias aliquid iusto eaque perferendis.
                    </p>
                    <div class="pro-details__img my-4">
                      <img
                        src="/images/blog/single/01.jpg"
                        alt="Project Image"
                      />
                    </div>

                    <h5>Metaverse</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Soluta, debitis tenetur dolorem a ab voluptas dolore
                      nesciunt saepe optio amet temporibus ipsum beatae est
                      quisquam.
                    </p>
                    <div class="pro-details__img my-4">
                      <img
                        src="/images/blog/single/02.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </section>

                  <!-- token -->
                  <section id="pro-details-token">
                    <h4>The Speakers Token Details</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio animi, id ducimus eum tempora minus labore saepe
                      fuga eius dolor non veritatis excepturi perferendis
                      molestiae nulla quia officiis sunt soluta.
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum dolores alias aliquid iusto eaque perferendis.
                    </p>
                    <div class="pro-details__token-info mt-4">
                      <h5>Token Info</h5>
                      <ul class="pro-details__tokenlist">
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Lorem ipsum dolor
                          sit amet.
                        </li>
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Opsum dolor sit
                          amet.
                        </li>
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Dolor sit amet.
                        </li>
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Zit amet Lorem,
                          ipsum.
                        </li>
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Xmet dio lor em.
                        </li>
                        <li class="pro-details__tokenlist-item">
                          <i class="fa-solid fa-dice-d6"></i> Elor sit amet.
                        </li>
                      </ul>
                    </div>

                    <div class="pro-details__img my-4">
                      <img src="/images/blog/single/03.jpg" alt="Token Image" />
                    </div>
                  </section>

                  <!-- Roadmap -->
                  <section id="pro-details-roadmap">
                    <h4>The Speakers Roadmap</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio animi, id ducimus eum tempora minus labore saepe
                      fuga eius dolor non veritatis excepturi perferendis
                      molestiae nulla quia officiis sunt soluta.
                    </p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum dolores alias aliquid iusto eaque perferendis.
                    </p>
                    <div class="pro-details__img my-4">
                      <img
                        src="/images/blog/single/04.jpg"
                        alt="roadmap Image"
                      />
                    </div>
                  </section>

                  <!-- backers -->
                  <section id="pro-details-backers">
                    <h4>Our Backers</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Optio animi, id ducimus eum tempora minus labore saepe
                      fuga eius dolor non veritatis excepturi perferendis
                      molestiae nulla quia officiis sunt soluta.
                    </p>

                    <div class="pro-details__img my-4">
                      <img
                        src="/images/blog/single/05.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <aside>
                <div class="pro-details__desc-nav">
                  <!-- navlist -->
                  <div
                    class="list-group bg--primary-color mb-4"
                    id="pro-details-navlist"
                  >
                    <a
                      class="list-group-item list-group-item-action"
                      href="#pro-details-about"
                      ><i class="fa-solid fa-window-restore"></i> About</a
                    >
                    <a
                      class="list-group-item list-group-item-action"
                      href="#pro-details-token"
                    >
                      <i class="fa-solid fa-diagram-project"></i> Token</a
                    >
                    <a
                      class="list-group-item list-group-item-action"
                      href="#pro-details-roadmap"
                    >
                      <i class="fa-solid fa-road"></i> Roadmap</a
                    >
                    <a
                      class="list-group-item list-group-item-action"
                      href="#pro-details-backers"
                      ><i class="fa-solid fa-user-astronaut"></i> Backers</a
                    >
                  </div>

                  <!-- pro details link -->
                  <div class="pro-details__links">
                    <div class="pro-details__links-item">
                      <div class="pro-details__links-title">
                        <h6>Social Media</h6>
                      </div>
                      <div class="pro-details__links-content">
                        <ul class="social">
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-discord"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-twitch"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-linkedin-in"></i
                            ></a>
                          </li>
                          <li class="social__item">
                            <a href="#" class="social__link"
                              ><i class="fab fa-facebook-f"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="pro-details__links-item">
                      <div class="pro-details__links-title">
                        <h6>Website Link</h6>
                      </div>
                      <div class="pro-details__links-content">
                        <a class="pro-details__links-btn" href="#"
                          >www.example.com
                          <span><i class="fa-solid fa-globe"></i></span>
                        </a>
                      </div>
                    </div>
                    <div class="pro-details__links-item">
                      <div class="pro-details__links-title">
                        <h6>Download Whitepaper</h6>
                      </div>
                      <div class="pro-details__links-content">
                        <a class="pro-details__links-btn" href="#"
                          >Whitepaper
                          <span
                            ><i class="fa-solid fa-cloud-arrow-down"></i
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useLayoutStore } from "~/stores/layout";

definePageMeta({
  layout: "inner",
});
export default {
  scrollToTop: true,
  setup() {
    const layoutStore = useLayoutStore();
    layoutStore.assignLayoutData({
      title: "Project Details",
      subtitle: "Project details",
    });
    return {};
  },
  head() {
    return {
      title: "project details",
    };
  },
  data() {
    return {
      infolist: [
        {
          title: "Total Supply",
          value: "1,000,000,000 Bzon",
        },
        {
          title: "FDV",
          value: "30M USD",
        },
        {
          title: "Initial Supply",
          value: "1,300,000,0 Bzon",
        },
        {
          title: "Initial Market Cap",
          value: "6.48M USD",
        },
      ],
      completedProjectList: [],
    };
  },
};
</script>

<style></style>
