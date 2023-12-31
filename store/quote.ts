import { defineStore } from "pinia";
import type { IQuoeteItem, ITags } from "@/components/partials/quote";

const { get } = useApi();

export const useQuoteStore = defineStore("quote", {
  state: () => ({
    tagList: ref<ITags[]>([]),
    quoteListPinia: ref<IQuoeteItem[]>([]),
    selectedQuote: ref<IQuoeteItem>(),
  }),
  getters: {
    getTagList: (state) => state.tagList,
    getQuoteList: (state) => state.quoteListPinia,
    getselectedQuote: (state) => state.selectedQuote,
  },
  actions: {
    async fetchQuoteData() {
      get("/get-quotes", { page: 1, limit: 5 })
        .then((res) => {
          this.quoteListPinia = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    fetchTagList() {
      if(!this.tagList.length) {
        get("/get-tags")
          .then((res) => {
            this.tagList = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {});
      }
    },

    fetchSearch(searchedString: string) {
      get("/search-quotes", { q: searchedString })
        .then((res) => {
          this.quoteListPinia = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
        });
    },
    selectQuote(item: IQuoeteItem) : void {
      this.selectedQuote = item;
      console.log("selectQuote");
      
    },
  },
});
