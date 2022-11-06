import { createApp } from 'vue';
import App from './App.vue';

/** import CSS */
import './assets/css/main.css';

/** import the fontawesome core */ 
import { library } from '@fortawesome/fontawesome-svg-core';

/** import fontawesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/** import specific icons */
import {faBars, faUserCircle, faChevronDown, faGear, faRightFromBracket, faHouse, faHeartPulse, faFileWaveform, faFilePen, faKey } from '@fortawesome/free-solid-svg-icons';

/** add icons to the library */
library.add(faBars, faUserCircle, faChevronDown, faGear, faRightFromBracket, faHouse, faHeartPulse, faFileWaveform, faFilePen, faKey);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

/*
monitorings: [
    {id: 1, title: 'Health', icon: 'fa-heart-pulse'},
    {id: 2, title: 'Logs', icon: 'fa-file-circle-info'}
],
administrations: [
    {id: 1, title: 'Log level', icon: 'fa-file-pen'},
    {id: 2, title: 'License', icon: 'fa-key'}
]

*/