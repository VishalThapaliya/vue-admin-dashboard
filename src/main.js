import { createApp } from 'vue';
import App from './App.vue';

/** import CSS */
import './assets/css/main.css';

/** import the fontawesome core */ 
import { library } from '@fortawesome/fontawesome-svg-core';

/** import fontawesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/** import specific icons */
import {faBars, faUserCircle, faChevronDown, faGear, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

/** add icons to the library */
library.add(faBars, faUserCircle, faChevronDown, faGear, faRightFromBracket);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
