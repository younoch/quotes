<template>
  <div>
    <!-- ==========>> faq Section start Here <<========== -->
    <section class="faq padding-bottom shape-1r" id="faq">
      <div class="container">
        <div class="section-header section-header--middle">
          <div class="section-header__content">
            <div class="section-header__titlebar">
              <p class="section-header__subtitle">Faq</p>
              <h2 class="section__header__title">Common Queries</h2>
            </div>
          </div>
        </div>

        <div class="faq__wrapper">
          <ul class="faq__tab nav nav-pills mb-5" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-general-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-general"
                type="button"
                role="tab"
                aria-controls="pills-general"
                aria-selected="true"
              >
                General Questions
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-token-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-token"
                type="button"
                role="tab"
                aria-controls="pills-token"
                aria-selected="false"
              >
                Token Sales
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-investor-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-investor"
                type="button"
                role="tab"
                aria-controls="pills-investor"
                aria-selected="false"
              >
                Investor Guides
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-security-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-security"
                type="button"
                role="tab"
                aria-controls="pills-security"
                aria-selected="false"
              >
                Security
              </button>
            </li>
          </ul>
          <div class="tab-content faq__content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-general"
              role="tabpanel"
              aria-labelledby="pills-general-tab"
            >
              <div class="row gy-3 gx-5">
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordingGeneral-left"
                  >
                    <div
                      v-for="(item, index) in generalQuestions.slice(0, 3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`general1-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 1 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#general1-collapse-${item.id}`"
                          :aria-expanded="index == 1 ? true : false"
                          :aria-controls="`general1-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`general1-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 1 ? 'show' : ''"
                        :aria-labelledby="`general1-heading-${item.id}`"
                        data-bs-parent="#accordingGeneral-left"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordionGeneral-right"
                  >
                    <div
                      v-for="(item, index) in generalQuestions.slice(3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`general2-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 2 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#general2-collapse-${item.id}`"
                          :aria-expanded="index == 2 ? true : false"
                          :aria-controls="`general2-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`general2-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 2 ? 'show' : ''"
                        :aria-labelledby="`general2-heading-${item.id}`"
                        data-bs-parent="#accordionGeneral-right"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-token"
              role="tabpanel"
              aria-labelledby="pills-token-tab"
            >
              <div class="row gy-3 gx-5">
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="according-token-left"
                  >
                    <div
                      v-for="(item, index) in tokenSales.slice(3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`token1-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 2 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#token1-collapse-${item.id}`"
                          :aria-expanded="index == 2 ? true : false"
                          :aria-controls="`token1-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`token1-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 2 ? 'show' : ''"
                        :aria-labelledby="`token1-heading-${item.id}`"
                        data-bs-parent="#according-token-left"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="according-token-right"
                  >
                    <div
                      v-for="(item, index) in tokenSales.slice(3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`token2-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 0 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#token2-collapse-${item.id}`"
                          :aria-expanded="index == 0 ? true : false"
                          :aria-controls="`token2-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`token2-heading-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 0 ? 'show' : ''"
                        :aria-labelledby="`token2-heading-${item.id}`"
                        data-bs-parent="#according-token-right"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-investor"
              role="tabpanel"
              aria-labelledby="pills-investor-tab"
            >
              <div class="row gy-3 gx-5">
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordionInvestor1"
                  >
                    <div
                      v-for="(item, index) in invertorGuides.slice(0, 3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`investor1-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 1 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#investor1-collapse-${item.id}`"
                          :aria-expanded="index == 1 ? true : false"
                          :aria-controls="`investor1-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`investor1-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 1 ? 'show' : ''"
                        :aria-labelledby="`investor1-heading-${item.id}`"
                        data-bs-parent="#accordionInvestor1"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordionInvestor2"
                  >
                    <div
                      v-for="(item, index) in invertorGuides.slice(3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`investor2-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 2 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#investor2-collapse-${item.id}`"
                          :aria-expanded="index == 2 ? true : false"
                          :aria-controls="`investor2-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`investor2-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 2 ? 'show' : ''"
                        :aria-labelledby="`investor2-heading-${item.id}`"
                        data-bs-parent="#accordionInvestor2"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="pills-security"
              role="tabpanel"
              aria-labelledby="pills-security-tab"
            >
              <div class="row gy-3 gx-5">
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordionSecurity1"
                  >
                    <div
                      v-for="(item, index) in security.slice(0, 3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`security1-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 0 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#security1-collapse-${item.id}`"
                          :aria-expanded="index == 0 ? true : false"
                          :aria-controls="`security1-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`security1-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 0 ? 'show' : ''"
                        :aria-labelledby="`security1-heading-${item.id}`"
                        data-bs-parent="#accordionSecurity1"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="accordion accordion-flush"
                    id="accordionSecurity2"
                  >
                    <div
                      v-for="(item, index) in security.slice(3)"
                      :key="index"
                      class="accordion-item"
                    >
                      <h6
                        class="accordion-header"
                        :id="`security2-heading-${item.id}`"
                      >
                        <button
                          class="accordion-button"
                          :class="index == 1 ? '' : 'collapsed'"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#security2-collapse-${item.id}`"
                          :aria-expanded="index == 1 ? true : false"
                          :aria-controls="`security2-collapse-${item.id}`"
                        >
                          {{ item.question }}
                        </button>
                      </h6>
                      <div
                        :id="`security2-collapse-${item.id}`"
                        class="accordion-collapse collapse"
                        :class="index == 1 ? 'show' : ''"
                        :aria-labelledby="`security2-heading-${item.id}`"
                        data-bs-parent="#accordionSecurity2"
                      >
                        <div class="accordion-body">{{ item.answer }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==========>> faq Section Ends Here <<========== -->
  </div>
</template>
<script>
export default {
  setup() {
    const generalQuestions = [
      {
        id: 1,
        question: "What is IDO Launching?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 2,
        question: "How can I launch an IDO in The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms
                In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 3,
        question: "Can I un stake after eachIDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms
                In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 4,
        question: "What can I fund my allocation with?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms
                In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 5,
        question: "Want to launch your project?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms
                In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 6,
        question: "Do I have to register for each IDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms
                In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
    ];
    const tokenSales = [
      {
        id: 1,
        question: "Do I have to register for each IDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 2,
        question: "What can I fund my allocation with?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 3,
        question: "Want to launch your project?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 4,
        question: "Can I stake after eachIDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 5,
        question: "What is the payment method of The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 6,
        question: "Is cryptocurrency used for illegal activities?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
    ];
    const invertorGuides = [
      {
        id: 1,
        question: "How do I participate in IDOs?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 2,
        question: "What are the steps of anIDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 3,
        question: "who can participate inIDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 4,
        question: "How to Find IDO Token?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 5,
        question: "Do I have to register for each IDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 6,
        question: "How to start trading in Metaverse?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
    ];
    const security = [
      {
        id: 1,
        question: "How can I Launch my IDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 2,
        question: "Who is allowed in The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 3,
        question: "What is the Benifits in The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 4,
        question: "How can I Make Money viaIDO?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 5,
        question: "Is it secure to launch game in The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
      {
        id: 6,
        question: "Which Blockchain is used in The Speakers?",
        answer: `Fundamentally seller sells their currency to gain cash and a buyer buys expecting hold the currency until value increases in dollar/rupee terms In mid-August 202 total market value of all cryptocurrency exceeded $2 trillion, with Bitcoin alone making up 44% of that.`,
      },
    ];
    return {
      generalQuestions,
      tokenSales,
      invertorGuides,
      security,
    };
  },
};
</script>
