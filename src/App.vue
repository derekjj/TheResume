<template lang="pug">
  #app
    .row
      .col-4
        b-button(variant="primary" to="/") Home
      .col-4
        b-button(variant="primary" to="/edit") Edit
      .col-4
        b-button(variant="primary" to="/upload") Upload
    .row
      .col-12
        router-view
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
