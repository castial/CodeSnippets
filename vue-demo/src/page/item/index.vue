<template>
  <div class="item_container">
    <div class="item_list">
      <header class="item_title">
          <span>{{ itemDetail.question }}</span>
      </header>
      <form>
        <div class="item_radio" :key="item.id" v-for="item in itemDetail.answerList">
          <input name="answer" type="radio" :value="item.id" v-model="picked">
          {{ item.answer }}
        </div>
        <button type="button" @click="handleClicked">下一题</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      picked: '',
      itemDetail: {
        question: '请问世界上最大的湖泊是哪个?',
        answerList: [
          {
            answer: '答案1',
            id: 1
          },
          {
            answer: '答案1',
            id: 2
          },
          {
            answer: '答案1',
            id: 3
          },
          {
            answer: '答案1',
            id: 4
          }
        ]
      }
    }
  },
  methods: {
    handleClicked () {
      alert('选中的是' + this.picked)
    }
  }
}
</script>
