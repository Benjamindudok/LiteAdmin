import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { formatDate } from '@/filters';
import {
    MdApp,
    MdTable,
    MdButton,
    MdField,
    MdContent,
    MdMenu,
    MdLayout,
    MdDrawer,
    MdToolbar,
    MdIcon,
    MdList,
    MdCard,
    MdProgress,
    MdSnackbar,
    MdCheckbox,
    MdDatepicker,
    MdDialog,
    MdDialogConfirm,
    MdAutocomplete,
    MdRipple,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

import Element from 'element-ui';

Vue.use(Element);

Vue.config.productionTip = false;

Vue.filter('formatDate', formatDate);

Vue.use(MdApp);
Vue.use(MdTable);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdContent);
Vue.use(MdMenu);
Vue.use(MdLayout);
Vue.use(MdDrawer);
Vue.use(MdToolbar);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdCard);
Vue.use(MdProgress);
Vue.use(MdSnackbar);
Vue.use(MdCheckbox);
Vue.use(MdDatepicker);
Vue.use(MdDialog);
Vue.use(MdDialogConfirm);
Vue.use(MdAutocomplete);
Vue.use(MdRipple);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
