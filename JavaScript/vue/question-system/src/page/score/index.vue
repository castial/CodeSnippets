<template>
    <div class="score_container">
        <header>
            <span>分数：{{ score }}</span>
        </header>
        <el-button @click="handleClicked" type="primary">重新开始</el-button>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      score: 0
    }
  },
  computed: mapState([
    'answerIDList',
    'questionList'
  ]),
  created () {
    // 获取正确的答案集合
    const rightAnswerIDList = this.getRightAnswerList()
    const list = rightAnswerIDList.filter(id => {
      return this.answerIDList.indexOf(id) > -1
    })
    this.score = list.length * 20
  },
  methods: {
    getRightAnswerList () {
      let rightAnswerList = []
      this.questionList.forEach(question => {
        question.question_answer_list.forEach(answer => {
          const answerId = answer.is_standard_answer ? answer.answer_id : ''
          rightAnswerList.push(answerId)
        })
      })
      return rightAnswerList
    },
    handleClicked () {
      this.$router.push('/home')
    }
  }
}
</script>
