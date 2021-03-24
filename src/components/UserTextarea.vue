<template>
  <div>
    <div class="form-section">
      <div class="question-title">
        <p>ご相談内容</p>
      </div>
      <textarea v-model="formData3.text"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'ご相談内容をご記入ください',
      priviousPage: '/user-questions',
      nextPage: '#',
      formData3: {
        text: '',
      },
    };
  },
  created() {
    this.$emit('title', this.title);
    this.$emit('priviousPage', this.priviousPage);
    this.$emit('nextPage', this.nextPage);
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>
