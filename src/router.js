import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/addcontact",
            name: "addcontact",
            component: () =>
                import("./views/AddContact.vue")
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () =>
                import( "./views/Contacts.vue")
        },
        {
            path: "/addaction",
            name: "addaction",
            component: () =>
                import("./views/AddAction.vue")
        },
        {
            path: "/actions",
            name: "actions",
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/Actions.vue")
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
