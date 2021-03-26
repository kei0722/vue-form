<template>
  <div class="container">
    <div class="inner-container">
      <div class="header-section">
        <h3>STEP{{ pageNumber }}</h3>
        <h2>{{ title }}</h2>
      </div>
      <router-view></router-view>
    </div>
    <div class="btn-section">
      <router-link
        :to="priviousPage"
        v-if="!(pageNumber === 1)"
        class="privious-btn"
        >&lt; 前へ戻る</router-link
      >
      <router-link :to="nextPage" v-if="!(pageNumber === 4)" class="next-btn"
        >次へ進む &gt;</router-link
      >
      <a href="#" v-if="pageNumber === 4" class="submit-btn">送信 &gt;</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageNumber: {
      get() {
        return this.$store.getters.getPageNumber;
      },
      set(value) {
        this.$store.commit('pageNumber', value);
      },
    },
    title: {
      get() {
        return this.$store.getters.getTitle;
      },
      set(value) {
        this.$store.commit('title', value);
      },
    },
    priviousPage: {
      get() {
        return this.$store.getters.getPriviousPage;
      },
      set(value) {
        this.$store.commit('priviousPage', value);
      },
    },
    nextPage: {
      get() {
        return this.$store.getters.getNextPage;
      },
      set(value) {
        this.$store.commit('nextPage', value);
      },
    },
  },
};
</script>

<style>
body {
  font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', 'YuGothic', sans-serif;
}
.inner-container {
  border: 1px solid #2cdcb8;
  border-radius: 5px;
}
.header-section {
  border-bottom: 1px solid #2cdcb8;
  position: relative;
  background-color: #abdee6;
}
h2 {
  margin: 0;
  padding: 10px 0;
  text-align: center;
}
h3 {
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  padding: 3px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(70 156 255);
  color: rgb(255 255 255);
  border-radius: 3px;
}
.form-section {
  padding: 20px;
}
.question-title {
  color: #1d93c3;
}
.question-title > p {
  margin: 0 0 10px 0;
}
.question-answer {
  margin-left: 5px;
}
.question:not(:first-child) {
  margin-top: 30px;
}
select {
  font-size: 16px;
  padding: 5px;
  width: 100px;
}
.btn-section {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.privious-btn,
.next-btn,
.submit-btn {
  border: 1px solid #2cdcb8;
  border-radius: 3px;
  background-color: #2cdcb8;
  color: white;
  text-decoration: none;
  padding: 7px 30px;
  cursor: pointer;
}
</style>
