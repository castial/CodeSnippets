<template>
  <div>
    <h1>{{ message }}</h1>
    <img src="./assets/logo.png">
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue-Template.'
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
