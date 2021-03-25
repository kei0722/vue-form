<template>
  <div>
    <div class="form-section">
      <div class="question">
        <div class="question-title">
          <p>{{ genderChoice }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getGender }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>{{ birthdayChoice }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getFullBirthday }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>{{ question1 }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getQuestion1Chosen }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>{{ question2 }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getQuestion2Chosen }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>{{ question3 }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getQuestion3Chosen }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>{{ textTitle }}</p>
        </div>
        <div class="question-answer">
          <p>{{ getTextContent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 4,
      title: '以下の内容をご確認ください',
      priviousPage: '/user-textbox',
    };
  },
  computed: {
    genderChoice() {
      return this.$store.getters.getGenderChoice;
    },
    getGender() {
      return this.$store.getters.getGender;
    },
    birthdayChoice() {
      return this.$store.getters.getBirthdayChoice;
    },
    getFullBirthday() {
      return this.$store.getters.getFullBirthday;
    },
    question1() {
      return this.$store.getters.getQuestion1;
    },
    getQuestion1Chosen() {
      return this.$store.getters.getQuestion1Chosen;
    },
    question2() {
      return this.$store.getters.getQuestion2;
    },
    getQuestion2Chosen() {
      return this.$store.getters.getQuestion2Chosen;
    },
    question3() {
      return this.$store.getters.getQuestion3;
    },
    getQuestion3Chosen() {
      return this.$store.getters.getQuestion3Chosen;
    },
    textTitle() {
      return this.$store.getters.getTextTitle;
    },
    getTextContent() {
      return this.$store.getters.getTextContent;
    },
  },
  created() {
    this.$store.commit('pageNumber', this.pageNumber);
    this.$store.commit('title', this.title);
    this.$store.commit('priviousPage', this.priviousPage);
  },
};
</script>
