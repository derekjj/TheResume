<template lang="pug">
  .container-flex
    .row.m-0
      .col-lg-4.vh-100(style="overflow-y:scroll;")
        Form
      .col-lg-8.vh-100(style="overflow-y:scroll;")
        Resume
</template>
<script>
import Form from "../components/Form.vue";
import Resume from "../components/Resume.vue";
export default {
  components: {
    Form,
    Resume
  }
};
</script>
<style scoped>
.body {
  height: calc(100% - 65px);
  height: -o-calc(100% - 65px); /* opera */
  height: -webkit-calc(100% - 65px); /* google, safari */
  height: -moz-calc(100% - 65px);
}
</style>