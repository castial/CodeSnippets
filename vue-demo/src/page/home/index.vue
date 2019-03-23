<template>
    <div class="home_container">
        <section>
            <div>
              <el-button type="primary" @click="pushItem">开始答题</el-button>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  created () {
    this.initData()
  },
  methods: {
    ...mapActions([
      'initData'
    ]),
    pushItem () {
      this.$router.push('/item')
    }
  }
}
</script>
