<template>
  <div>
    <h1>{{ message }}</h1>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import data from './data.js'

export default {
  data() {
    return {
      message: data.data()
    }
  }
}
</script>

<style scoped>

h1 {
  color: red;
}

</style>
