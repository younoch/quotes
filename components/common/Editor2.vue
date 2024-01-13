<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <editor
      api-key="no-api-key"
      v-bind:init="editorOptions"
      initial-value="Welcome to TinyMCE Vue"
    />
  </div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'

const editorOptions = {
  height: 500,
  menubar: false,
  plugins: [
    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount','code'
  ],
  toolbar:
    'undo redo | casechange blocks | bold italic backcolor | \
    alignleft aligncenter alignright alignjustify | \
    bullist numlst checklist outdent indent | removeformat | a11ycheck code table help | code', 
}
</script>