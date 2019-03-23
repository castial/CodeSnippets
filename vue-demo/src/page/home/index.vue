<template>
    <div class="home_container">
        <section>
            <header class="top_tips">
                <span>{{ title }}</span>
            </header>
            <div>
                <button type="button" @click="pushItem">开始做题</button>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '点击下方，开始做题吧!'
    }
  },
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
