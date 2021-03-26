import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appData: {
      pageNumber: '',
      title: '',
      priviousPage: '',
      nextPage: '',
    },
    userInformation: {
      gender: '',
      year: 1981,
      month: 1,
      date: 1,
    },
    userQuestions: {
      question1Choice: '',
      question2Choice: '',
      question3Choice: '',
    },
    userTextarea: {
      text: '',
    },
  },

  getters: {
    getPageNumber: (state) => state.appData.pageNumber,
    getTitle: (state) => state.appData.title,
    getPriviousPage: (state) => state.appData.priviousPage,
    getNextPage: (state) => state.appData.nextPage,
    getGender: (state) => state.userInformation.gender,
    getYear: (state) => state.userInformation.year,
    getMonth: (state) => state.userInformation.month,
    getDate: (state) => state.userInformation.date,
    getFullBirthday: (state) =>
      `${state.userInformation.year}年${state.userInformation.month}月${state.userInformation.date}日`,
    getQuestion1Choice: (state) => state.userQuestions.question1Choice,
    getQuestion2Choice: (state) => state.userQuestions.question2Choice,
    getQuestion3Choice: (state) => state.userQuestions.question3Choice,
    getText: (state) => state.userTextarea.text,
  },

  mutations: {
    pageNumber(state, value) {
      state.appData.pageNumber = value;
    },
    title(state, value) {
      state.appData.title = value;
    },
    priviousPage(state, value) {
      state.appData.priviousPage = value;
    },
    nextPage(state, value) {
      state.appData.nextPage = value;
    },
    gender(state, value) {
      state.userInformation.gender = value;
    },
    year(state, value) {
      state.userInformation.year = value;
    },
    month(state, value) {
      state.userInformation.month = value;
    },
    date(state, value) {
      state.userInformation.date = value;
    },
    question1Choice(state, value) {
      state.userQuestions.question1Choice = value;
    },
    question2Choice(state, value) {
      state.userQuestions.question2Choice = value;
    },
    question3Choice(state, value) {
      state.userQuestions.question3Choice = value;
    },
    text(state, value) {
      state.userTextarea.text = value;
    },
  },
});
