<template lang="pug">
  b-navbar.mt-0(toggleable="lg" type="dark" variant="success")
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav hi
    b-navbar-nav.ml-auto
      b-nav-item(tag="router-link" :to="{name: 'View'}") View
      b-nav-item(tag="router-link" :to="{name: 'Edit'}") Edit
      b-nav-item(tag="router-link" :to="{name: 'Upload'}") Upload
</template>