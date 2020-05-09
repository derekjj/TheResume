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
          rows="25"
          max-rows="25")
        b-button.m-2(variant="success" @click="save()") Save
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return { json: null };
  },
  computed: {
    ...mapGetters(["resume"])
  },
  methods: {
    ...mapActions(["setResume"]),
    async save() {
      await this.setResume(JSON.parse(this.json));
      await this.$router.push({ path: "/" });
    }
  },
  mounted() {
    // this.json = JSON.parse(JSON.stringify(this.resume));
    this.json = JSON.stringify(JSON.parse(JSON.stringify(this.resume)), null, 2)
  }
};
</script>