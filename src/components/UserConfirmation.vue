<template>
  <div>
    <div class="form-section">
      <div class="question">
        <div class="question-title">
          <p>-性別-</p>
        </div>
        <div class="question-answer">
          <p>{{ gender }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>-生年月日-</p>
        </div>
        <div class="question-answer">
          <p>{{ fullBirthday }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>-現在、生命保険に加入されていますか？-</p>
        </div>
        <div class="question-answer">
          <p>{{ question1Choice }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>
            -現在入院中ですか？または、最近3ヶ月以内に医師の診断・審査の結果、入院・手術を勧められたことはありますか？-
          </p>
        </div>
        <div class="question-answer">
          <p>{{ question2Choice }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>
            -過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-
          </p>
        </div>
        <div class="question-answer">
          <p>{{ question3Choice }}</p>
        </div>
      </div>
      <div class="question">
        <div class="question-title">
          <p>-ご相談内容-</p>
        </div>
        <div class="question-answer">
          <p>{{ text }}</p>
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
    gender() {
      return this.$store.getters.getGender;
    },
    fullBirthday() {
      return this.$store.getters.getFullBirthday;
    },
    question1Choice() {
      return this.$store.getters.getQuestion1Choice;
    },
    question2Choice() {
      return this.$store.getters.getQuestion2Choice;
    },
    question3Choice() {
      return this.$store.getters.getQuestion3Choice;
    },
    text() {
      return this.$store.getters.getText;
    },
  },
  created() {
    this.$store.commit('pageNumber', this.pageNumber);
    this.$store.commit('title', this.title);
    this.$store.commit('priviousPage', this.priviousPage);
  },
};
</script>
