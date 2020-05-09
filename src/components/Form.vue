<template lang="pug">
  div
    b-form
      b-form-group(
        id="input-group-basics"
        label="Basics:"
        label-class="card-header h3 mt-4 p-2")
        b-form-input(
          v-model="resume.basics.name"
          type="text"
          placeholder="Enter full name")
        b-form-input(
          v-model="resume.basics.label"
          type="text"
          placeholder="Enter label")
        b-form-input(
          v-model="resume.basics.picture"
          type="url"
          placeholder="Url of picture")
        b-form-input(
          v-model="resume.basics.email"
          type="email"
          placeholder="Enter email")
        b-form-input(
          v-model="resume.basics.phone"
          type="text"
          placeholder="Enter phone number")
        b-form-input(
          v-model="resume.basics.url"
          type="url"
          placeholder="Url of website")
        b-form-textarea(
          v-model="resume.basics.summary"
          placeholder="Enter summary..."
          rows="3")
        b-form-group(
          id="input-group-location"
          label="Location:"
          label-class="card-header h3 mt-4 p-2")
          b-form-input(
            v-model="resume.basics.location.address"
            type="text"
            placeholder="Enter address")
          b-form-input(
            v-model="resume.basics.location.postalCode"
            type="text"
            placeholder="Enter postal code")
          b-form-input(
            v-model="resume.basics.location.city"
            type="text"
            placeholder="Enter city")
          b-form-input(
            v-model="resume.basics.location.countryCode"
            type="text"
            placeholder="Enter countryCode")
          b-form-input(
            v-model="resume.basics.location.region"
            type="text"
            placeholder="Enter region")
        b-form-group(
          id="input-group-profiles"
          label="Profiles:"
          label-class="card-header h3 mt-4 p-2")
          div.m-1(
            v-for="(profile, index) in resume.basics.profiles"
            :key="profile.url")
            b-form-input(
              v-model="profile.network"
              type="text"  
              placeholder="Enter network")
            b-form-input(
              v-model="profile.username"
              type="text"  
              placeholder="Enter username")
            b-form-input(
              v-model="profile.url"
              type="text"  
              placeholder="Enter url")
          .m-1
            b-button.m-1(variant="danger" @click="removeProfile(index)") Remove Profile
            b-button.m-1(variant="success" @click="addProfile") Add Profile
        b-form-group(
          id="input-group-work"
          label="Work:"
          label-class="card-header h3 mt-4 p-2")
          div.m-1(
            v-for="(work, iWork) in resume.work")
            b-form-input(
              v-model="work.company"
              type="text"  
              placeholder="Enter company")
            b-form-input(
              v-model="work.position"
              type="text"  
              placeholder="Enter position")
            b-form-input(
              v-model="work.website"
              type="text"  
              placeholder="Enter website")
            b-form-input(
              v-model="work.startDate"
              type="text"  
              placeholder="Enter start date")
            b-form-input(
              v-model="work.endDate"
              type="text"  
              placeholder="Enter end date")
            b-form-input(
              v-model="work.summary"
              type="text"  
              placeholder="Enter summary")
            .m-1
              b-button.m-1(variant="danger" @click="removeWork(index)") Remove Work
              b-button.m-1(variant="success" @click="addWork") Add Work
            b-form-group(
              id="input-group-work"
              label="Highlights:"
              label-class="card-header h3 mt-4 p-2")
              div(
                v-for="(highlight, index) in work.highlights")
                b-form-input(
                  v-model="work.highlights[index]"
                  type="text"  
                  placeholder="Enter highlight")
              .m-1
                b-button.m-1(variant="danger" @click="removeHighlight(index)") Remove Highlight
                b-button.m-1(variant="success" @click="addHighlight(iWork)") Add Highlight
      b-button(type="submit" variant="primary") Submit
      b-button(type="reset" variant="danger") Reset
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["resume"]),
    json() {
      return null;
    }
  },
  created() {
    console.log(this.resume);
  },
  methods: {
    onSubmit() {
      this.showForm = false;
    },
    onReset() {},
    addProfile() {
      this.resume.profiles.push({ network: "", username: "", url: "" });
    },
    removeProfile(index) {
      this.resume.profiles.splice(index, 1);
    },
    addWork() {
      this.resume.work.push({
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: ""
      });
    },
    removeWork(index) {
      this.resume.work.splice(index, 1);
    },
    addHighlight(index) {
      //Stopped working here
      this.resume.work[index].highlights.push();
    },
    removeHighlight(index) {
      this.resume.work.highlights.splice(index, 1);
    }
  }
};
</script>
