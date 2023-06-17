import { defineStore } from "pinia";

export const useLayoutStore = defineStore("feature", {
  state: () => ({
    count: 0,
    layoutTitle: "",
    layoutSubtitle: "",
  }),
  getters: {
    getLayoutTitle: (state) => state.layoutTitle,
    getLayoutSubtitle: (state) => state.layoutSubtitle,
  },
  actions: {
    assignLayoutData(payload) {
      this.layoutTitle = payload.title;
      this.layoutSubtitle = payload.subtitle;
    },
  },
});
