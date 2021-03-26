<template>
  <div>
    <div class="form-section">
      <div class="question-title">
        <p>-ご相談内容-</p>
      </div>
      <textarea v-model="text"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: 3,
      title: 'ご相談内容をご記入ください',
      priviousPage: '/user-questions',
      nextPage: '/user-confirmation',
    };
  },
  computed: {
    text: {
      get() {
        return this.$store.getters.getText;
      },
      set(value) {
        this.$store.commit('text', value);
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
textarea {
  width: 100%;
  height: 200px;
}
</style>
