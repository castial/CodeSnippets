<template>
  <div class="main">
    <div class="content">
      容器外部有一道边框，并且有圆角
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  background: linear-gradient(#fb3 50%, #58a 50%);
  background-size: 100% 30px;
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
  background: tan;
  outline: .6em solid #655;
  box-shadow: 0 0 0 .4em #655;
  padding: 1em;
  border-radius: .8em;
}

</style>
