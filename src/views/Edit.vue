<template lang="pug">
  .container-flex
    .row.mr-0
      .col-4.pr-0.pl-4
        Form
      .col-8.pl-0.pr-0
        Resume
</template>
<script>
import Form from "../components/Form.vue";
import Resume from "../components/Resume.vue";
export default {
  components: {
    Form,
    Resume
  },
  layout: "resume"
};
</script>