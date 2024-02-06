import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";

const authRoutes =  [
    {
        path: '/giris-yap',
        name: 'login',
        component: LoginView,
        meta: {
            layout: 'GuestLayout'
        }
    },
    {
        path: '/kayit-ol',
        name: 'register',
        component: RegisterView,
        meta: {
            layout: 'GuestLayout'
        }
    },
    {
        path: '/parolami-unuttum',
        name: 'forgot-password',
        component: ForgotPasswordView,
        meta: {
            layout: 'GuestLayout'
        }
    },
]

export default authRoutes