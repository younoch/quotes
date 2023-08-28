<template>
  <div class="container">
    <form class="row" @submit.prevent="submit">
      <div class="mb-2 col-12">
        <label for="quote-input" class="form-label">New Quote</label>
        <textarea
          class="form-control"
          id="quote-input"
          type="textarea"
          v-model="formData.quote"
          rows="2"
          placeholder="write quote..."
          aria-describedby="quoteError"
        ></textarea>
      </div>
      <div class="mb-2 col-12">
        <label for="author-input" class="form-label">Add Author</label>
        <input
          class="form-control"
          id="author-input"
          type="text"
          v-model="formData.author"
          placeholder="write author name..."
          aria-describedby="authorError"
        />
      </div>
      <div class="mb-2 col-6">
        <label for="category-select" class="form-label">Select Category</label>
        <select class="form-select" id="category-select" v-model="formData.category_id">
          <option selected>Choose...</option>
          <option v-for="(item, index) in categories" :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-2 col-6">
        <label for="color-select" class="form-label">Select Language</label>
        <select class="form-select" id="color-select" v-model="formData.lang">
          <option selected>Choose...</option>
          <option v-for="(item, index) in languese" :value="item.value">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-2 col-12">
        <label for="tags-input" class="form-label">Add Tags</label>
        <input
          class="form-control"
          id="tags-input"
          type="text"
          v-model="tagStringList"
          placeholder="write tags separated by commas..."
          aria-describedby="tagsError"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Category } from "~/components/partials/quote";

const formData = ref({
  quote: '',
  author: '',
  lang: 'en',
  category_id: '',
  tags: [],
  comments: []
})

const tagStringList = ref('')

const categories: Category[] = [
  {
    name: "Popular",
    value: "1",
    counts: 15,
  },
  {
    name: "Inspirational",
    value: "2",
    counts: 20,
  },
  {
    name: "Humor",
    value: "3",
    counts: 65,
  },
  {
    name: "Success",
    value: "4",
    counts: 32,
  },
  {
    name: "Philosophy",
    value: "5",
    counts: 16,
  },
  {
    name: "Happiness",
    value: "6",
    counts: 70,
  },
  {
    name: "Love",
    value: "7",
    counts: 26,
  },
  {
    name: "Motivational",
    value: "8",
    counts: 20,
  },
];
const languese: any[] = [
  {
    name: "English",
    value: "en",
  },
];
const { post } = useApi();
const submit  = async () => {
  const tags : string[] = tagStringList.value.trim().split(",");
  formData.value.author = formData.value.author.toLowerCase()
  for (const tag of tags) {
    formData.value.tags.push(tag.toLowerCase())   
  }
  post("/add-quote", formData.value)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
  
}
</script>
