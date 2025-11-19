import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {
    create,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NButton,
} from 'naive-ui'

const naive = create({
    components: [NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NButton]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
