import { createApp } from 'vue'
import App from './App.vue'
// Import dependencies
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
// App modules
import router from './router'
import * as lang from './lang/defaults'
import './assets/css/main.css'

const app:any = createApp(App)
app.use(Vuesax)
app.use(router)
app.config.globalProperties.$lang = lang.es
app.mount('#app')

export default app;