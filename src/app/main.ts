import { createApp } from 'vue'
import App from './app.vue'
import {vuetify} from "./plugins/vuetify";
import router from "./providers/router";
import store from "./providers/store";
import './styles/style.css'
const app = createApp(App);

app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app')
