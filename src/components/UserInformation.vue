<template>
  <div>
    <div class="form-section">
      <div class="question">
        <div class="question-title">
          <p>-性別-</p>
        </div>
        <div class="question-answer">
          <input type="radio" id="male" value="男性" v-model="gender" />
          <label for="male">男性</label>
          <input type="radio" id="female" value="女性" v-model="gender" />
          <label for="female">女性</label>
        </div>
      </div>

      <div class="question">
        <div class="question-title">
          <p>-生年月日-</p>
        </div>
        <div class="question-answer">
          <select v-model="year" @change="getMaxDate">
            <option v-for="n in 40" :key="n">{{ n + 1980 }}</option> </select
          >年
          <select v-model="month" @change="getMaxDate">
            <option v-for="n in 12" :key="n">{{ n }}</option> </select
          >月
          <select v-model="date">
            <option v-for="n in maxDate" :key="n">{{ n }}</option> </select
          >日
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 1,
      title: 'お客様の情報を入力してください',
      nextPage: '/user-questions',
      maxDate: 31,
    };
  },
  computed: {
    gender: {
      get() {
        return this.$store.getters.getGender;
      },
      set(value) {
        this.$store.commit('gender', value);
      },
    },
    year: {
      get() {
        return this.$store.getters.getYear;
      },
      set(value) {
        this.$store.commit('year', value);
      },
    },
    month: {
      get() {
        return this.$store.getters.getMonth;
      },
      set(value) {
        this.$store.commit('month', value);
      },
    },
    date: {
      get() {
        return this.$store.getters.getDate;
      },
      set(value) {
        this.$store.commit('date', value);
      },
    },
  },
  created() {
    this.$store.commit('pageNumber', this.pageNumber);
    this.$store.commit('title', this.title);
    this.$store.commit('nextPage', this.nextPage);
    this.getMaxDate();
  },
  methods: {
    getMaxDate() {
      this.maxDate = new Date(this.year, this.month, 0).getDate();
    },
  },
};
</script>
