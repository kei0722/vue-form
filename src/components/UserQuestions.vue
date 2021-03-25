<template>
  <div>
    <div class="form-section">
      <div class="question">
        <div class="question-title">
          <p>{{ question1 }}</p>
        </div>
        <div class="question-answer">
          <input
            type="radio"
            id="question1-y"
            value="はい"
            v-model="getQuestion1Choice"
          />
          <label for="question1-y">はい</label>
          <input
            type="radio"
            id="question1-n"
            value="いいえ"
            v-model="getQuestion1Choice"
          />
          <label for="question1-n">いいえ</label>
        </div>
      </div>

      <transition name="fade">
        <div class="question" v-if="getQuestion1Choice">
          <div class="question-title">
            <p>{{ question2 }}</p>
          </div>
          <div class="question-answer">
            <input
              type="radio"
              id="question2-y"
              value="はい"
              v-model="getQuestion2Choice"
            />
            <label for="question2-y">はい</label>
            <input
              type="radio"
              id="question2-n"
              value="いいえ"
              v-model="getQuestion2Choice"
            />
            <label for="question2-n">いいえ</label>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="question" v-if="getQuestion2Choice">
          <div class="question-title">
            <p>{{ question3 }}</p>
          </div>
          <div class="question-answer">
            <input
              type="radio"
              id="question3-y"
              value="はい"
              v-model="getQuestion3Choice"
            />
            <label for="question3-y">はい</label>
            <input
              type="radio"
              id="question3-n"
              value="いいえ"
              v-model="getQuestion3Choice"
            />
            <label for="question3-n">いいえ</label>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 2,
      title: '以下にお答えください',
      priviousPage: '/',
      nextPage: '/user-textbox',
    };
  },
  computed: {
    question1() {
      return this.$store.getters.getQuestion1;
    },
    question2() {
      return this.$store.getters.getQuestion2;
    },
    question3() {
      return this.$store.getters.getQuestion3;
    },
    getQuestion1Choice: {
      get() {
        return this.$store.state.userQuestions.formData.question1Choice;
      },
      set(value) {
        this.$store.commit('question1Choice', value);
      },
    },
    getQuestion2Choice: {
      get() {
        return this.$store.state.userQuestions.formData.question2Choice;
      },
      set(value) {
        this.$store.commit('question2Choice', value);
      },
    },
    getQuestion3Choice: {
      get() {
        return this.$store.state.userQuestions.formData.question3Choice;
      },
      set(value) {
        this.$store.commit('question3Choice', value);
      },
    },
  },
  created() {
    this.$store.commit('pageNumber', this.pageNumber);
    this.$store.commit('title', this.title);
    this.$store.commit('priviousPage', this.priviousPage);
    this.$store.commit('nextPage', this.nextPage);
  },
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
