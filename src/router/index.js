import {createMemoryHistory, createRouter as _createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileUser from "@/views/ProfileView.vue";
import JobSeekers from "@/views/JobSeekersView.vue";
import JobLists from "@/views/JobsView.vue";
import Companies from "@/views/CompaniesView.vue";
import authRoutes from "@/router/auth.js"
import BlogView from "@/views/BlogView.vue";
import JobCategoriesView from "@/views/JobCategoriesView.vue";
import profileRoutes from "@/router/profile.js";

//import.meta.env.BASE_URL

// const pages = import.meta.glob('./views/*.vue')
//
// const routes = Object.keys(pages).map(path => {
//     const name = path.match(/\.\/views(.*)\.vue$/)[1].toLowerCase()
//     return {
//         path: name === '/home' ? '/' : name,
//         component: pages[path]
//     }
// })

const routes = [
    ...authRoutes,
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: '/profil',
        name: 'profile',
        component: ProfileUser,
        children: [
            ...profileRoutes,
        ],
    },
    {
        path: '/is-arayanlar',
        name: 'is-arayanlar',
        component: JobSeekers,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: '/is-ilanlari',
        name: 'is-ilanlari',
        component: JobLists,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: '/sirketler',
        name: 'sirketler',
        component: Companies,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: '/is-kategorileri',
        name: 'is-kategorileri',
        component: JobCategoriesView,
        meta: {
            layout: 'AppLayout'
        }
    },
]

export const createRouter = () => {
    return _createRouter({
        history: import.meta.env.SSR
            ? createMemoryHistory('/')
            : createWebHistory('/'),
        routes
    })
}