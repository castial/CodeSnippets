<template>
  <div class="item_container">
    <div class="item_list">
      <header class="item_title">
        <span>{{ questionList[itemNum - 1].question_name }}</span>
      </header>
      <div>
        <div
          :key="answer.answer_id"
          class="item_radio"
          v-for="answer in questionList[itemNum - 1].question_answer_list"
        >
          <input :value="answer.answer_id" name="answer" type="radio" v-model="pickAnswer">
          {{ answer.answer_name }}
        </div>
        <button @click="handleClicked" type="button">{{ buttonName }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      pickAnswer: ''
    }
  },
  computed: {
    ...mapState([
      'itemNum',
      'timer',
      'questionList'
    ]),
    'buttonName': function () {
      if (this.itemNum < this.questionList.length) {
        return '下一题'
      }
      return '查看结果'
    }
  },
  methods: {
    ...mapActions([
      'submitAnswer'
    ]),
    handleClicked () {
      if (this.itemNum < this.questionList.length) {
        this.jumpNextQuestionPage()
      } else {
        this.jumpScorePage()
      }
    },
    jumpScorePage () {
      this.$router.push('/score')
    },
    jumpNextQuestionPage () {
      if (this.pickAnswer) {
        this.submitAnswer(this.pickAnswer)
      } else {
        alert('请选择一个心目中的答案')
      }
    }
  }
}
</script>
