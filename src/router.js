import Vue from 'vue';
import Router from 'vue-router';
import UserInformation from './components/UserInformation.vue';
import UserQuestions from './components/UserQuestions.vue';
import UserTextarea from './components/UserTextarea.vue';
import UserConfirmation from './components/UserConfirmation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: UserInformation },
    { path: '/user-questions', component: UserQuestions },
    { path: '/user-textbox', component: UserTextarea },
    { path: '/user-confirmation', component: UserConfirmation },
  ],
});
