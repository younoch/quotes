<template>
  <div class="mb-2 mb-lg-3">
    <div class="widget widget-search">
      <div class="widget-search-inner">
        <div class="input-group">
          <input
            type="text"
            class="form-control p-1 p-md-1"
            v-model="searchedString"
            placeholder="Search quote"
            aria-label="Search bar"
            @focusin="isSearch = true"
            @focusout="isSearch = false"
            @keyup.enter="submitValue"
          />

          <div class="search-icon d-flex justify-content-center align-items-center rounded-1 px-2 ms-1" @click="submitValue" >
            <nuxt-icon name="generals/magnifying-glass"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSearch = ref<boolean>(false);
const searchedString = ref<string>("");

const emits = defineEmits<{
  (event: "submitSearchedString", searchedString: string): void;
  (event: "searchState", isSearch: boolean): void;
}>();

function submitValue() {
  emits("submitSearchedString", searchedString.value);
}

watch(
  () => isSearch.value,
  (value: boolean) => {
    emits("searchState", value);
  }
);
</script>

<style scoped></style>
