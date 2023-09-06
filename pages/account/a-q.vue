<template>
  <div class="container">
    <form ref="formContent" class="row" @submit.prevent="submit">
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
          <option v-for="(item, index) in categories" :value="item.id">
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
      <div class="mt-2 mt-md-4">
        <button type="submit" class="btn btn-primary w-100 ">Submit</button>
      </div>
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
const formContent = ref(null)

const categories = [
{
    name: "Love",
    value: "love",
    id: 1,
  },
  {
    name: "Life",
    value: "life",
    id: 2,
  },
  {
    name: "Birthday",
    value: "birthday",
    id: 3,
  },
  {
    name: "Motivational",
    value: "motivational",
    id: 4,
  },
  {
    name: "Funny",
    value: "funny",
    id: 5,
  },
  {
    name: "Inspirational",
    value: "inspirational",
    id: 6,
  },
  {
    name: "Family",
    value: "family",
    id: 7,
  },
  {
    name: "Movie",
    value: "movie",
    id: 8,
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
    .then((res) => {
      alert("Success! You have completed the task.");
      if(formContent.value)
      formContent.value.reset()
    })
    .catch((err) => {
      console.log(err);
      alert("Error! Something went wrong.");
    })
    .finally(() => {});
  
}
</script>
