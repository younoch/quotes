<script setup lang="ts">
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

interface Props {
  modelValue: string;
  id?: string;
  name?: string;
  autocomplete?: string | "off";
  readonly?: boolean;
  toolbar?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  inputClass?: string;
  maxlength?: number;
  minlength?: number;
  options?: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  autocomplete: "",
  toolbar: "",
});

const emit = defineEmits(["update:modelValue", "invalid"]);

const content = ref<any>(props.modelValue);

// methods
const update = (event: Event) => {
  console.log(content.value);
  
  emit("update:modelValue", content.value);
  if (content.value.length >= (props.minlength || 0)) {
    if (props.options?.errorClass) {
      content.classList.remove(props.options?.errorClass || "");
    }
  }
  if (content._value.length >= (props.minlength || 0)) {
    if (props.options?.errorClass) {
      content.classList.remove(props.options?.errorClass || "");
    }
  }
};

const invalid = (event) => {
  if (props.options?.errorClass) {
    content.classList.add(props.options?.errorClass || "");
  }
  emit("invalid");
};
</script>

<template>
  <div class="editor" :class="{ disabled: disabled }">
    <QuillEditor
      class=""
      :toolbar="toolbar"
      :options="options"
      :class="inputClass"
      :id="id"
      :name="name"
      contentType="html"
      v-model:content="content"
      @text-change="update($event)"
      :autocomplete="autocomplete"
      @invalid.prevent="invalid"
      :required="required"
    />
  </div>
</template>
