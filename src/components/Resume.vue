<template lang="pug">
  .container
    .row(v-if="resume.basics.image.length")
      .col-3
        img(src="resume.basics.image")
      .col-6
        h1.name {{resume.basics.name}}
    .row(v-else)
      .col-12
        h1.name {{resume.basics.name}}
    .row#label
      .col-12 {{resume.basics.label}}
    .row#basics
      .col-md-4 
        a(:href="'mailto:'+resume.basics.email") {{resume.basics.email}}
      .col-md-4 {{resume.basics.phone}}
      .col-md-4 
        a(:href="resume.basics.url") {{resume.basics.url}}
    .row#profiles
      .col-md-4(v-for="(profile,index) in resume.basics.profiles")
        a(:href="profile.url") {{profile.url}}
    .row#location
      .col-md-4 {{resume.basics.location.address}}
      .col-md-4 {{resume.basics.location.city}}
      .col-md-4 {{resume.basics.location.region}}
    .row#summary
      .col-md-12 {{resume.basics.summary}}
    .row#subtitle(v-if=("resume.work.length > 0"))
      .col-12.text-left#subtitle
        h5 Work Experience
      .col-12#work(v-for="(work, index) in resume.work")
        .row
          .col-md-6.text-left
            h6 {{work.company}}
          .col-md-6.text-right
            h6 {{work.startDate}} - {{work.endDate}}
          .col-md-6.text-left {{work.position}}
          .col-md-6.text-right
            a(:href="work.website") {{work.website}}
          .col-12.text-left {{work.summary}}
          .col-md-4(v-for="(highlight, index) in work.highlights")
            | {{highlight}}
    .row#subtitle(v-if=("resume.volunteer.length > 0"))
      .col-12.text-left#subtitle
        h5 Volunteer Experience
      .col-12#volunteer(v-for="(volunteer, index) in resume.volunteer")
        .row
          .col-md-6.text-left
            h6 {{volunteer.organization}}
          .col-md-6.text-right
            h6 {{volunteer.startDate}} - {{volunteer.endDate}}
          .col-md-6.text-left {{volunteer.position}}
          .col-md-6.text-right
            a(:href="volunteer.website") {{volunteer.website}}
          .col-12.text-left {{volunteer.summary}}
          .col-6(v-for="(highlight, index) in volunteer.highlights")
            | {{highlight}}
    .row#subtitle(v-if=("resume.education.length > 0"))
      .col-12.text-left#subtitle
        h5 Education
      .col-12#education(v-for="(education, index) in resume.education")
        .row
          .col-md-6.text-left
            h6 {{education.institution}}
          .col-md-6.text-right
            h6 {{education.startDate}} - {{education.endDate}}
          .col-md-6.text-left {{education.area}}, {{education.studyType}}
          .col-md-6.text-right {{education.gpa}}
          .col-md-4(v-for="(course, index) in education.courses")
            | {{course}}
    .row#subtitle(v-if=("resume.awards.length > 0"))
      .col-12.text-left#subtitle
        h5 Awards
      .col-md-6#awards(v-for="(award, index) in resume.awards")
        .row
          .col-md-6.text-left
            h6 {{award.title}}
          .col-md-6.text-right
            h6 {{award.date}}
          .col-md-6.text-left {{award.awarder}}
          .col-md-6.text-right {{award.summary}}
    .row#subtitle(v-if=("resume.references.length > 0"))
      .col-12.text-left#subtitle
        h5 Interests
      .col-3#interests(v-for="(interest, index) in resume.interests")
        .row
          .col-md-12
            h6 {{interest.name}}
            section(v-for="(keyword, index) in interest.keywords")
              | {{keyword}}
    .row#subtitle(v-if=("resume.references.length > 0"))
      .col-12.text-left#subtitle
        h5 References
      .col-6#reference(v-for="(reference, index) in resume.references")
        .row
          .col-md-6.text-left
            h6 {{reference.name}}
            | {{reference.reference}}
    .row#subtitle(v-else)
      .col-12.text-right#subtitle
        | references aviable upon request.
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["resume"])
  },
};
</script>

<style scoped>
#location,
#label,
#summary,
#work,
#volunteer,
#awards {
  margin-bottom: 1em;
}
#subtitle {
  padding-left: 0px;
}
.name {
  text-shadow: none;
  color: #000;
}

/* h1,
h4 {
  text-shadow: #222 0.1em 0.1em 0.1em;
  color: #fff;
}

h2 {
  color: #28a745;
} */
</style>