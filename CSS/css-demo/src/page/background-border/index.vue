<template>
  <div class="main">
    <div class="content">
      <h4>可以看到一个半透明的边框</h4>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  background: green;
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
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;
}
</style>
