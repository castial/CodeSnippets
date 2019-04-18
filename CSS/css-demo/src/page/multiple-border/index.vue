<template>
  <div class="main">
    <div class="content">
      <h4>多个边框模型</h4>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #fb3 50%, #58a 50%);
  background-size: 30px 100%;
  position: relative;
}

.content {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: white;
  box-shadow: 0 0 0 10px red,
              0 0 0 20px black,
              0 0 0 30px dodgerblue;
  
}
</style>
