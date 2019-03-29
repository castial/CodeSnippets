<template>
  <div>
    <h1>{{ message }}</h1>
    <img src="../../assets/logo.png">
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'This is home page.'
        }
    }
}
</script>
<style scoped>
h1 {
  color: red;
}
</style>