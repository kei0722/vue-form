<template>
  <div>
    <div class="form-section">
      <div class="question">
        <div class="question-title">
          <p>現在、生命保険に加入されていますか？</p>
        </div>
        <div class="question-answer">
          <input
            type="radio"
            id="question1-y"
            value="yes"
            v-model="formData2.question1"
          />
          <label for="question1-y">はい</label>
          <input
            type="radio"
            id="question1-n"
            value="no"
            v-model="formData2.question1"
          />
          <label for="question1-n">いいえ</label>
        </div>
      </div>

      <transition name="fade">
        <div class="question" v-if="formData2.question1">
          <div class="question-title">
            <p>
              現在入院中ですか？または、最近3ヶ月以内に医師の診断・審査の結果、入院・手術を勧められたことはありますか？
            </p>
          </div>
          <div class="question-answer">
            <input
              type="radio"
              id="question2-y"
              value="yes"
              v-model="formData2.question2"
            />
            <label for="question2-y">はい</label>
            <input
              type="radio"
              id="question2-n"
              value="no"
              v-model="formData2.question2"
            />
            <label for="question2-n">いいえ</label>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="question" v-if="formData2.question2">
          <div class="question-title">
            <p>
              過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？
            </p>
          </div>
          <div class="question-answer">
            <input
              type="radio"
              id="question3-y"
              value="yes"
              v-model="formData2.question3"
            />
            <label for="question3-y">はい</label>
            <input
              type="radio"
              id="question3-n"
              value="no"
              v-model="formData2.question3"
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
      title: '以下にお答えください',
      priviousPage: '/',
      nextPage: '/user-textbox',
      show: false,
      formData2: {
        question1: '',
        question2: '',
        question3: '',
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
