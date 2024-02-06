import ProfileOverviewView from "@/views/ProfileOverviewView.vue";
import ProfileSettingsView from "@/views/ProfileSettingsView.vue";
import ProfilePasswordChangeView from "@/views/ProfilePasswordUpdateView.vue";
import ProfileFavoriteJobsView from "@/views/ProfileFavoriteJobsView.vue";
import ProfileDocumentsView from "@/views/ProfileDocumentsView.vue";
import ProfileEducationsView from "@/views/ProfileEducationsView.vue";
import ProfileExperiencesView from "@/views/ProfileExperiencesView.vue";
import ProfileContactsView from "@/views/ProfileContactsView.vue";

const profileRoutes = [
    {
        path: 'onizleme',
        name: 'profile-overview',
        component: ProfileOverviewView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'ayarlar',
        name: 'profile-settings',
        component: ProfileSettingsView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'parola-guncelleme',
        name: 'password-update',
        component: ProfilePasswordChangeView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'favori-islerim',
        name: 'favorite-jobs',
        component: ProfileFavoriteJobsView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'belge-yukleme-islemleri',
        name: 'document-upload-process',
        component: ProfileDocumentsView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'egitim',
        name: 'education',
        component: ProfileEducationsView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'deneyim',
        name: 'experience',
        component: ProfileExperiencesView,
        meta: {
            layout: 'AppLayout'
        }
    },
    {
        path: 'iletisim',
        name: 'contact',
        component: ProfileContactsView,
        meta: {
            layout: 'AppLayout'
        }
    },
]


export default profileRoutes