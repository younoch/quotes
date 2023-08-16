<template>
  <div class="mb-2 mb-lg-3">
    <div class="widget widget-search">
      <div class="widget-search-inner">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="searchedString"
            placeholder="Search quote"
            aria-label="Search bar"
            @focusin="isSearch = true"
            @focusout="isSearch = false"
            @keyup.enter="submitValue"
          />

          <button class="search-icon" @click="submitValue" >
            <client-only>
              <i class="fa-solid fa-magnifying-glass"></i>
            </client-only>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSearch = ref<boolean>(false);
const searchedString = ref<string>("");

const emit = defineEmits<{
  (event: "submitSearchedString", searchedString: string): void;
  (event: "searchState", isSearch: boolean): void;
}>();

function submitValue() {

  emit("submitSearchedString", searchedString.value);
}

watch(
  () => isSearch.value,
  (value: boolean) => {
    emit("searchState", value);
  }
);
</script>

<style scoped></style>
