<template>
  <div>
    <div>
      <input v-model="message">
      <button v-on:click="submitMessage">提交</button>
    </div>
    <ul>
      <todo-item v-for="(item, index) in list" :key="index" :content="item" :index="index" v-on:delete="deleteItem"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  data() {
    return {
      message: '',
      list: []
    }
  },
  components: {
    TodoItem
  },
  methods: {
    submitMessage: function() {
      this.list.push(this.message)
      this.message = ''
    },
    deleteItem: function(index, content) {
      if (confirm('是否删除' + content + '?')) {
        this.list.splice(index, 1)
      }
    }
  }
}

</script>

<style>
</style>
