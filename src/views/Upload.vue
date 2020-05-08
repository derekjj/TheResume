<template lang="pug">
  .container
    .row
      .col
        | Upload Resume JSON
    .row
      .col
        b-form-textarea(
          id="json"
          v-model="json"
          placeholder="paste in JSON"
          rows="3"
          max-rows="6")
</template>

<script>
export default {
  data() {
    return {
      json: ""
    }
  },
  layout: "resume",
}
</script>