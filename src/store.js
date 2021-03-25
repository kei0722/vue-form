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
      genderChoice: '-性別-',
      birthdayChoice: '-生年月日-',
      formData: {
        gender: '',
        year: 1981,
        month: 1,
        date: 1,
      },
    },
    userQuestions: {
      question1: '-現在、生命保険に加入されていますか？-',
      question2:
        '-現在入院中ですか？または、最近3ヶ月以内に医師の診断・審査の結果、入院・手術を勧められたことはありますか？-',
      question3:
        '-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-',
      formData: {
        question1Choice: '',
        question2Choice: '',
        question3Choice: '',
      },
    },
    userTextarea: {
      textTitle: 'ご相談内容',
      formData: {
        text: '',
      },
    },
  },

  getters: {
    getGenderChoice: (state) => state.userInformation.genderChoice,
    getBirthdayChoice: (state) => state.userInformation.birthdayChoice,

    getQuestion1: (state) => state.userQuestions.question1,
    getQuestion2: (state) => state.userQuestions.question2,
    getQuestion3: (state) => state.userQuestions.question3,

    getTextTitle: (state) => state.userTextarea.textTitle,

    getGender: (state) => state.userInformation.formData.gender,
    getFullBirthday: (state) =>
      `${state.userInformation.formData.year}年${state.userInformation.formData.month}月${state.userInformation.formData.date}日`,

    getQuestion1Chosen: (state) => state.userQuestions.formData.question1Choice,
    getQuestion2Chosen: (state) => state.userQuestions.formData.question2Choice,
    getQuestion3Chosen: (state) => state.userQuestions.formData.question3Choice,

    getTextContent: (state) => state.userTextarea.formData.text,
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
      state.userInformation.formData.gender = value;
    },
    year(state, value) {
      state.userInformation.formData.year = value;
    },
    month(state, value) {
      state.userInformation.formData.month = value;
    },
    date(state, value) {
      state.userInformation.formData.date = value;
    },
    question1Choice(state, value) {
      state.userQuestions.formData.question1Choice = value;
    },
    question2Choice(state, value) {
      state.userQuestions.formData.question2Choice = value;
    },
    question3Choice(state, value) {
      state.userQuestions.formData.question3Choice = value;
    },
    text(state, value) {
      state.userTextarea.formData.text = value;
    },
  },
});
