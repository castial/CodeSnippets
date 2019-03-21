<template>
  <div class="item_container">
    <div class="item_list">
      <header class="item_title">
          <span>{{ itemDetail.question }}</span>
      </header>
      <div>
        <div class="item_radio" :key="item.id" v-for="item in itemDetail.answerList">
          <input name="answer" type="radio" :value="item.id" v-model="picked">
          {{ item.answer }}
        </div>
        <button type="button" @click="handleClicked">下一题</button>
      </div>
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
            answer: '贝加尔湖',
            id: 1
          },
          {
            answer: '青海湖',
            id: 2
          },
          {
            answer: '密西根湖',
            id: 3
          },
          {
            answer: '洞庭湖',
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
