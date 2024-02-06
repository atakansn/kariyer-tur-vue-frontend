import './assets/css/icons.css'
import './assets/css/tailwind.css'

import { createApp } from './main'

const { app, router } = createApp()

//app.mount('#app')

router.isReady()

app.mount('#app')
