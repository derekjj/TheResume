import Vue from "vue";
import VueRouter from "vue-router";

import View from "../views/Index.vue";
import Edit from "../views/Edit.vue";
import Upload from "../views/Upload.vue";
import NonExisting from "../views/NonExisting.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "View",
      component: View,
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit,
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
    },
    {
      path: "*",
      name: "NonExisting",
      component: NonExisting,
    },
  ],
});

export default router;
