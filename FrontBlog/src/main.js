import { createApp } from 'vue'
import App from './App.vue'

//import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(/*...*/);

app.use(VMdPreview);

createApp(App).mount('#app')
